﻿namespace App.Common.UITest.Writer
{
    using App.Common.Configurations;
    using App.Common.UITest.Environment;
    using App.Common.UITest.UI;
    using OfficeOpenXml;
    using System.IO;
    using System.Linq;

    public class ExcelTestWriter : BaseTestWriter
    {
        private ExcelPackage package;
        private ExcelWorksheet workSheet;
        private int currentRow = 2;
        public ExcelTestWriter(IEnvironment environtment) : base(environtment)
        {
            string templateFile = Path.Combine(Configuration.Current.Folder.BaseResourceFolder, Configuration.Current.UITest.ReportTemplate);
            string outputTo = Path.Combine(this.Environment.OutputFolder, Path.GetFileName(templateFile));
            this.package = new ExcelPackage(new FileInfo(outputTo), new FileInfo(templateFile));
            this.workSheet = this.package.Workbook.Worksheets["firefox"];
        }

        public override void Write(IEnvironment environment)
        {
        }

        public override void Write(Suite.ITestSuite testSuite)
        {
            this.workSheet.Cells[this.currentRow, 1].Value = testSuite.Name;
            this.workSheet.Cells[this.currentRow, 6].Value = testSuite.Description;
            this.currentRow++;
        }

        public override void Write(Suite.TestCaseCollection testCaseCollection)
        {
        }

        public override void Write(Suite.TestCaseRef testCaseRef, System.Collections.Generic.IList<Suite.TestCaseAction> actions)
        {
            this.workSheet.Cells[this.currentRow, 2].Value = testCaseRef.Name;
            this.workSheet.Cells[this.currentRow, 5].Value = actions.Any(item => item.Status == TestResultType.Fail) ? TestResultType.Fail.ToString() : TestResultType.Success.ToString();
            this.workSheet.Cells[this.currentRow, 6].Value = testCaseRef.Description;
            this.currentRow++;
        }

        public override void Write(Suite.TestCaseAction action)
        {
            this.workSheet.Cells[this.currentRow, 3].Value = action.ActionRef.Action;
            this.workSheet.Cells[this.currentRow, 5].Value = action.Status.ToString();
            if (action.Status == TestResultType.Fail)
            {
                foreach (IUIAction uiAction in action.UIActions)
                {
                    this.Write(uiAction);
                }
            }

            this.currentRow++;
        }

        public override void Write(IUIAction uiAction)
        {
            this.workSheet.Cells[this.currentRow, 4].Value = string.Format("{0}-{1}", uiAction.Type.ToString(), uiAction.Element);
            this.workSheet.Cells[this.currentRow, 5].Value = uiAction.Status.ToString();
            this.currentRow++;
        }

        public override void Dispose()
        {
            base.Dispose();
            this.package.Save();
            this.package.Dispose();
        }
    }
}