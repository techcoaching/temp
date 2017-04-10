﻿namespace App.Common.Helpers
{
    using System.Drawing;
    using System.IO;
    using System.Text;

    public class PhotoHelper
    {
        public static Image CreatePngStream(string content, ThumbnailType type)
        {
            byte[] contentInByte = Encoding.ASCII.GetBytes(content);
            MemoryStream ms = new MemoryStream(contentInByte, 0, contentInByte.Length);
            Image img = Image.FromStream(ms, true);
            return new Bitmap(img);
        }
    }
}