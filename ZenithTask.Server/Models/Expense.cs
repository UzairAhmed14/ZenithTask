namespace ZenithTask.Server.Models
{
    public class Expense
    {
        public int Id { get; set; }
        public string? ExpenseName { get; set; }
        public string? ExpenseType { get; set; }
        public decimal Amount { get; set; }
        public DateTime? Date { get; set; }
    }
}
