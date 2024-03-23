using MySqlConnector;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using ZenithTask.Server.Data;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<ZenithTaskServerContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("ZenithTaskServerContext") ?? throw new InvalidOperationException("Connection string 'ZenithTaskServerContext' not found.")));

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddMySqlDataSource(builder.Configuration.GetConnectionString("DefaultConnection"));
builder.Services.AddTransient<MySqlConnection>(_=> new MySqlConnection(builder.Configuration.GetConnectionString("Default")));

var app = builder.Build();
app.UseCors(x=>x.AllowAnyHeader().AllowAnyMethod().WithOrigins("https://localhost:5173"));
app.UseDefaultFiles();
app.UseStaticFiles();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();
