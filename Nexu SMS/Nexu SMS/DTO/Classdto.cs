﻿using Nexu_SMS.Entity;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Nexu_SMS.DTO
{
    public class Classdto
    {


        public string ClassId { get; set; }

        public string semName { get; set; }

        public string streamName { get; set; }

        public string Teacherid { get; set; }


    }
}
