using Microsoft.AspNetCore.Mvc;
using ZenithTask.Server.Data;
using ZenithTask.Server.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ZenithTask.Server.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ExpensesController : ControllerBase
    {
        // GET: api/<ExpensesController>
        [HttpGet(Name = "Expense")]
        public IEnumerable<Expense> Get()
        {
            ZenithTaskServerContext zenithTaskServerContext = new ZenithTaskServerContext();
            var expData = zenithTaskServerContext.Expense.ToArray();
            return expData;
        }
    }
}
