using System;

namespace Notes.Web.Controllers
{
	public class Note
	{
		public Guid? Id {get;set;}
		public string Title { get; set; }
		public string Body { get; set; }
		public string[] Tags { get; set; } = new string[0];
		public NoteStatus Status { get; set; } = NoteStatus.Draft;
	}
}
