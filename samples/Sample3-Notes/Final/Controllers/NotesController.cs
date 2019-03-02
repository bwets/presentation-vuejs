using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Notes.Web.Controllers
{
	[Route("api/notes")]
	public class NotesController : Controller
	{
		private readonly ILogger<NotesController> _logger;

		public NotesController(ILogger<NotesController> logger)
		{
			_logger = logger;
		}

		[AllowAnonymous]
		[HttpGet("{id}")]
		public async Task<IActionResult> Get(Guid id)
		{
			return Ok();
		}


		[HttpGet("query")]
		public async Task<IActionResult> Query()
		{
			return Ok();
		}
	}
}
