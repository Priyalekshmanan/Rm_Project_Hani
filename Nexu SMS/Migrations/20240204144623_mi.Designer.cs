﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Nexu_SMS.Entity;

#nullable disable

namespace Nexu_SMS.Migrations
{
    [DbContext(typeof(ContextClass))]
    [Migration("20240204144623_mi")]
    partial class mi
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.1")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("Nexu_SMS.Entity.Student", b =>
                {
                    b.Property<string>("id")
                        .HasMaxLength(30)
                        .HasColumnType("varchar");

                    b.Property<DateTime>("dob")
                        .HasColumnType("datetime2");

                    b.Property<string>("fName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("First Name");

                    b.Property<string>("lName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("Last Name");

                    b.HasKey("id");

                    b.ToTable("students");
                });

            modelBuilder.Entity("Nexu_SMS.Entity.Users", b =>
                {
                    b.Property<string>("userId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("password")
                        .IsRequired()
                        .HasMaxLength(30)
                        .HasColumnType("varchar");

                    b.Property<string>("role")
                        .IsRequired()
                        .HasMaxLength(30)
                        .HasColumnType("varchar");

                    b.Property<string>("userName")
                        .IsRequired()
                        .HasMaxLength(30)
                        .HasColumnType("varchar");

                    b.HasKey("userId");

                    b.ToTable("users");
                });

            modelBuilder.Entity("Nexu_SMS.Repository.AdmissionNo", b =>
                {
                    b.Property<string>("admissionNo")
                        .HasMaxLength(30)
                        .HasColumnType("varchar");

                    b.HasKey("admissionNo");

                    b.ToTable("AdmissionNoTable");
                });
#pragma warning restore 612, 618
        }
    }
}
