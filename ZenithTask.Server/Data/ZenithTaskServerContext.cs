using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ZenithTask.Server.Models;

namespace ZenithTask.Server.Data
{
    public class ZenithTaskServerContext : DbContext
    {
        public ZenithTaskServerContext()
        {
        }

        public ZenithTaskServerContext (DbContextOptions<ZenithTaskServerContext> options)
            : base(options)
        {
        }

        public DbSet<ZenithTask.Server.Models.Employee> Employee { get; set; } = default!;
        public DbSet<ZenithTask.Server.Models.Expense> Expense { get; set; } = default!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseMySQL("Server=localhost;Port=3306;UserId=root;Database=employee");
            }
        }
    }
}
