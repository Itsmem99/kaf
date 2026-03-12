using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace kaf.Pages
{
    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    [IgnoreAntiforgeryToken]
    public class ErrorModel : PageModel
    {
        private readonly ILogger<ErrorModel> _logger;

        public string? RequestId { get; private set; }

        public bool ShowRequestId => !string.IsNullOrWhiteSpace(RequestId);

        public ErrorModel(ILogger<ErrorModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
            RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier;

            // تسجيل الخطأ في الـ logs (مهم في الإنتاج)
            _logger.LogError(
                "An error occurred. RequestId: {RequestId}",
                RequestId
            );
        }
    }
}
