using System.ComponentModel.DataAnnotations;

namespace API.Entities;

public class Product
{   
    public int Id { get; set; }
    
    [MaxLength(50)]
    public required string Name { get; set; }
    
    [MaxLength(500)]
    public required string Description { get; set; }
    
    [MaxLength(50)]
    public required string Brand { get; set; }
    
    public long Price { get; set; }
    
    [MaxLength(500)]
    public required string PictureUrl { get; set; }
    
    [MaxLength(50)]
    public required string Type { get; set; }
    
    public int QuantityInStock { get; set; }
}
