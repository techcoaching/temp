import { Component } from "@angular/core";
import { BasePage } from "@app/common";
@Component({
    templateUrl: "src/modules/dashboard/sale/saleReport.html"
})
export class SaleReport extends BasePage<any> {
    protected onReady() {
        var options = new Stimulsoft.Viewer.StiViewerOptions();
        options.appearance.scrollbarsMode = true;
        options.appearance.pageBorderColor = Stimulsoft.System.Drawing.Color.navy;
        options.toolbar.borderColor = Stimulsoft.System.Drawing.Color.navy;
        options.toolbar.showPrintButton = false;
        options.toolbar.showViewModeButton = false;
        options.toolbar.viewMode = Stimulsoft.Viewer.StiWebViewMode.WholeReport;
        options.toolbar.zoom = 50;
        options.width = "1000px";
        options.height = "500px";

        let reportViewer: any = new Stimulsoft.Viewer.StiViewer(options, "StiViewer", false);
        var report = new Stimulsoft.Report.StiReport();
        report.loadFile("http://localhost:12345/api/reports/SimpleList.mrt");
        reportViewer.report = report;
        reportViewer.renderHtml("reportViewerContent");
    }
}