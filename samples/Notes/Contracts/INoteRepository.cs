using Notes.Web.Controllers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Notes.Web.Contracts
{
    public interface INoteRepository
    {
        Task<Note> Get(Guid id);
		Task<Note> Save(Note note);
		Task<IEnumerable<Note>> Query();
		Task Delete(Guid id);
		Task<string[]> GetTags();
    }
}
