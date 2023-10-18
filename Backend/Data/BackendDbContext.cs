using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.Data
{
    public class BackendDbContext : DbContext
    {
        public BackendDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Users> Users { get; set; }
    }
}
