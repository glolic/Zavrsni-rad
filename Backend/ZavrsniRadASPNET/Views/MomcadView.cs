﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ZavrsniRadASPNET.Views
{
    public class MomcadView
    {
        public int Id { get; set; }
        public string Naziv { get; set; }
        public KlubView Klub { get; set; }
    }
}