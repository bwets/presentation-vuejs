using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using System.IO;

namespace Notes.Web
{
	public static class Program
	{
		public static void Main(string[] args)
		{
			WebHost.CreateDefaultBuilder<NotesApplication>(args)
				.UseContentRoot(Directory.GetCurrentDirectory())
				.UseDefaultServiceProvider(options => options.ValidateScopes = false)
				.UseKestrel()
				.ConfigureKestrel((context, options) => { })
				.Build()
				.Run();
			
		}

	}
}
