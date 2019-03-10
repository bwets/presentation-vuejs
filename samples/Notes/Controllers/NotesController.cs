using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Notes.Web.Contracts;

namespace Notes.Web.Controllers
{
	[AllowAnonymous]
	[Route("api/notes")]
	public class NotesController : Controller
	{
		private readonly ILogger<NotesController> _logger;
		private readonly INoteRepository _repository;

		public NotesController(ILogger<NotesController> logger, INoteRepository repository)
		{
			_logger = logger;
			_repository = repository;
		}

		[HttpGet("{id}")]
		public async Task<ActionResult<Note>> Get(Guid id)
		{
			return Ok(await _repository.Get(id));
		}

		[HttpGet]
		public async Task<ActionResult<Note[]>> Query()
		{
			return Ok(await _repository.Query());
		}

		[HttpGet("tags")]
		public async Task<ActionResult<string[]>> Tags()
		{
			return Ok(await _repository.GetTags());
		}

		[HttpPost]
		public async Task<ActionResult<Note>> Save([FromBody]Note note)
		{
			return Ok(await _repository.Save(note));
		}

		[HttpDelete("{id}")]
		public async Task<ActionResult<Note>> Delete(Guid id)
		{
			await _repository.Delete(id);
			return Ok();
		}
	}
}
