using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Notes.Web.Controllers
{
	[Route("api/settings")]
	public class SettingsController: Controller
	{
		private readonly ILogger<SettingsController> _logger;

		public SettingsController(ILogger<SettingsController> logger)
		{
			_logger = logger;
		}
	}
}
