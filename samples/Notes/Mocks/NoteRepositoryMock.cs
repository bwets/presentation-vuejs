using Notes.Web.Contracts;
using Notes.Web.Controllers;
using System;
using System.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Notes.Web.Mocks
{
	public class NoteRepositoryMock : INoteRepository
	{
		private static readonly Note[] DefaultNotes = new Note[]{
			new Note(){ Id = Guid.Parse("5f20bd6f-8b61-451c-9a37-dbf39a0d8001"),  Title="Note 1", Body="Note Body 1",Status=NoteStatus.Normal},
			new Note(){ Id = Guid.Parse("5f20bd6f-8b61-451c-9a37-dbf39a0d8002"),  Title="Note 2", Body="Note Body 2",Status=NoteStatus.Normal}
		};

		private readonly List<Note> _Notes = new List<Note>(DefaultNotes);
		private string[] _Tags;
		public NoteRepositoryMock()
		{
			var json = System.IO.File.ReadAllText("notes.json");
			var notes = Newtonsoft.Json.JsonConvert.DeserializeObject<Note[]>(json);

			this._Notes = new List<Note>(notes.Take(3));
			this._Notes.Add(new Note()
			{
				Id = Guid.NewGuid(),
				Body = "# heading\n##heading\n* bullet1\n* bullet2\n* bullet3",
				Status = NoteStatus.Normal,
				Title = "Markdown sample"
			});
		}


		private void IndexTags(){
			//_Tags = _Notes.Select(n=>n.Tags).SelectMany(t=>t).ToArray();
		}
		public async Task Delete(Guid id)
		{
			var noteToDelete = _Notes.Find(n=>n.Id == id);
			if(noteToDelete !=null){
				_Notes.Remove(noteToDelete);
			}
			IndexTags();
		}

		public async Task<Note> Get(Guid id)
		{
			return _Notes.Find(n => n.Id == id);
		}

		public async Task<IEnumerable<Note>> Query()
		{
			return _Notes;
		}

		public async Task<Note> Save(Note note)
		{
			if (note.Status == NoteStatus.Draft)
			{
				note.Id = Guid.NewGuid();
				note.Status = NoteStatus.Normal;
			}

			if (_Notes.Any(n => n.Id == note.Id))
			{
				var previous = _Notes.Find(n=>n.Id == note.Id);
				if(previous !=null)
				{
					_Notes.Remove(previous);
				}
			}
			_Notes.Add(note);
			IndexTags();
			return note;
		}

		public Task<string[]> GetTags(){
			return Task.FromResult(_Tags);
		}
	}
}
