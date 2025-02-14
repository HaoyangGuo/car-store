using System;
using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public static class DbInitializer
{
    public static void InitDb(WebApplication app)
    {
        using var scope = app.Services.CreateScope();

        var context = scope.ServiceProvider.GetRequiredService<StoreContext>()
            ?? throw new InvalidOperationException("Failed to retrieve store context");

        SeedData(context);
    }

    private static void SeedData(StoreContext context)
    {
        context.Database.Migrate();

        if (context.Products.Any()) return;

        var products = new List<Product>
        {
            new Product
            {
                Name = "Megatron",
                Description =
                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                Price = 20000,
                PictureUrl = "/images/products/cat-tabby1.png",
                Brand = "Tabby",
                Type = "Male",
                QuantityInStock = 100
            },
            new Product
            {
                Name = "Refrigerator",
                Description = "Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.",
                Price = 15000,
                PictureUrl = "/images/products/cat-tabby2.png",
                Brand = "Tabby",
                Type = "Female",
                QuantityInStock = 100
            },
            new Product
            {
                Name = "Toaster",
                Description =
                    "Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.",
                Price = 18000,
                PictureUrl = "/images/products/cat-bengal1.png",
                Brand = "Bengal",
                Type = "Male",
                QuantityInStock = 100
            },
            new Product
            {
                Name = "Waffle",
                Description =
                    "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.",
                Price = 30000,
                PictureUrl = "/images/products/cat-bengal2.png",
                Brand = "Bengal",
                Type = "Female",
                QuantityInStock = 100
            },
            new Product
            {
                Name = "Blorp",
                Description =
                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                Price = 25000,
                PictureUrl = "/images/products/cat-siamese1.png",
                Brand = "Siamese",
                Type = "Male",
                QuantityInStock = 100
            },
            new Product
            {
                Name = "Noodle",
                Description =
                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                Price = 12000,
                PictureUrl = "/images/products/cat-persian1.png",
                Brand = "Persian",
                Type = "Female",
                QuantityInStock = 100
            },
            new Product
            {
                Name = "Chair",
                Description =
                    "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                Price = 1000,
                PictureUrl = "/images/products/cat-siamese2.png",
                Brand = "Siamese",
                Type = "Male",
                QuantityInStock = 100
            },
            new Product
            {
                Name = "Sprocket",
                Description =
                    "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                Price = 8000,
                PictureUrl = "/images/products/cat-mainecoon1.png",
                Brand = "Maine Coon",
                Type = "Female",
                QuantityInStock = 100
            },
            new Product
            {
                Name = "Blender",
                Description =
                    "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                Price = 1500,
                PictureUrl = "/images/products/cat-mainecoon2.png",
                Brand = "Maine Coon",
                Type = "Male",
                QuantityInStock = 100
            },
            new Product
            {
                Name = "Pancake",
                Description =
                    "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                Price = 1800,
                PictureUrl = "/images/products/cat-ragdoll1.png",
                Brand = "Ragdoll",
                Type = "Female",
                QuantityInStock = 100
            },
            new Product
            {
                Name = "Brick",
                Description =
                    "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                Price = 1500,
                PictureUrl = "/images/products/cat-ragdoll2.png",
                Brand = "Ragdoll",
                Type = "Male",
                QuantityInStock = 100
            },
            new Product
            {
                Name = "Spatula",
                Description =
                    "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                Price = 1600,
                PictureUrl = "/images/products/cat-sphynx1.png",
                Brand = "Sphynx",
                Type = "Female",
                QuantityInStock = 100
            },
            new Product
            {
                Name = "Fridge",
                Description =
                    "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                Price = 1400,
                PictureUrl = "/images/products/cat-sphynx2.png",
                Brand = "Sphynx",
                Type = "Male",
                QuantityInStock = 100
            },
            new Product
            {
                Name = "Bucket",
                Description =
                    "Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.",
                Price = 25000,
                PictureUrl = "/images/products/cat-british1.png",
                Brand = "British Shorthair",
                Type = "Female",
                QuantityInStock = 100
            },
            new Product
            {
                Name = "Lamp",
                Description =
                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                Price = 18999,
                PictureUrl = "/images/products/cat-british2.png",
                Brand = "British Shorthair",
                Type = "Male",
                QuantityInStock = 100
            },
            new Product
            {
                Name = "Spoon",
                Description =
                    "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.",
                Price = 19999,
                PictureUrl = "/images/products/cat-scottish1.png",
                Brand = "Scottish Fold",
                Type = "Female",
                QuantityInStock = 100
            },
            new Product
            {
                Name = "Fork",
                Description = "Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.",
                Price = 15000,
                PictureUrl = "/images/products/cat-russian1.png",
                Brand = "Russian Blue",
                Type = "Male",
                QuantityInStock = 100
            },
            new Product
            {
                Name = "Blender Jr.",
                Description =
                    "Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.",
                Price = 18000,
                PictureUrl = "/images/products/cat-russian2.png",
                Brand = "Russian Blue",
                Type = "Female",
                QuantityInStock = 100
            }
        };

        context.Products.AddRange(products);

        context.SaveChanges();
    }
}
