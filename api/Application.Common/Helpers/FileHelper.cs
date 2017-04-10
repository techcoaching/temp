﻿namespace App.Common.Helpers
{
    using System.Collections.Generic;
    using System.IO;
    using System.Web;
    using App.Common.UITest.Environment;
    using Ionic.Zip;

    public class FileHelper
    {
        internal static string GetRelativeFilePath(string filePath, string basePath)
        {
            return filePath.Replace(basePath, string.Empty);
        }

        public static void CreateIfNotExist(string folder)
        {
            if (Directory.Exists(folder))
            {
                return;
            }

            Directory.CreateDirectory(folder);
        }

        public static string GetContent(HttpPostedFile file)
        {
            string content;
            using (StreamReader reader = new StreamReader(file.InputStream))
            {
                content = reader.ReadToEnd();
            }

            return content;
        }

        internal static void CreateZipFile(IList<IEnvironment> environtments, string zipFileName)
        {
            ZipFile zipFile = new ZipFile();
            foreach (IEnvironment environment in environtments)
            {
                zipFile.AddDirectory(environment.OutputFolder);
            }

            zipFile.Save(zipFileName);
        }

        public static string GetContent(string filePath)
        {
            return File.ReadAllText(filePath);
        }
    }
}