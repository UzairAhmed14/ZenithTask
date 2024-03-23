using Microsoft.AspNetCore.Mvc;
using ZenithTask.Server.Data;
using ZenithTask.Server.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ZenithTask.Server.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {
        // GET: api/<EmployeesController>
        [HttpGet(Name = "Employee")]
        public IEnumerable<Employee> Get()
        {
            ZenithTaskServerContext zenithTaskServerContext = new ZenithTaskServerContext();
            var empData = zenithTaskServerContext.Employee.ToArray();
            return empData;
        }
    }
}
