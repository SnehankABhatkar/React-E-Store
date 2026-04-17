using System;
using API.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

// public class StoreContext(DbContextOptions options) : DbContext(options)
// {
//     public DbSet<Product> Products { get; set; }

// }

public class StoreContext(DbContextOptions options) : IdentityDbContext<User>(options)
{
    public required DbSet<Product> Products { get; set; }

    public required DbSet<Basket> Baskets { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.Entity<IdentityRole>().HasData(
            new IdentityRole
            {
                Id = "32f137af-9911-4d7e-b1dc-d4b294009e6a",
                ConcurrencyStamp = "Member",
                Name = "Member",
                NormalizedName = "MEMBER"
            },
            new IdentityRole
            {
                Id = "00d4c723-90dd-4ad7-917f-29bdc4bfd680",
                ConcurrencyStamp = "Admin",
                Name = "Admin",
                NormalizedName = "ADMIN"
            }
        );
    }
}
