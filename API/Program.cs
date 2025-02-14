using API.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
builder.Configuration.AddEnvironmentVariables();

builder.Services.AddControllers();
builder.Services.AddDbContext<StoreContext>(opt => {
    var dBConnectionString = builder.Configuration.GetValue<string>("CAR_STORE_DB_CONNECTION_STRING");
    if (string.IsNullOrEmpty(dBConnectionString))
    {
        throw new InvalidOperationException("Database connection string is not set in environment variables.");
    }
    opt.UseNpgsql(dBConnectionString);
});

var app = builder.Build();

app.MapControllers();

try
{
    DbInitializer.InitDb(app);
}
catch (Exception e)
{
    Console.WriteLine("An error occured when initializing the database");
    throw;
}

app.Run();
