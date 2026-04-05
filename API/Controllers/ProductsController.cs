using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis.CSharp.Syntax;

namespace API.Controllers;

[ApiController]
[Route("api/[controller]")] //https://localhost:5001/api/prodcuts
public class ProductsController(StoreContext context) : ControllerBase
{
    [HttpGet]
    public ActionResult<List<Product>> GetProducts()
    {
        return context.Products.ToList();
    }

    [HttpGet("{id}")]
    public ActionResult<Product> GetProduct(int id)
    {
        var product = context.Products.Find(id);

        if (product == null) return NotFound();

        return product;
    }
}
