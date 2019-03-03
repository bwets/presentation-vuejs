using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Serialization;
using Notes.Web.Contracts;

namespace Notes.Web
{
	public class NotesApplication
	{
		public NotesApplication()
		{
		}

		public void ConfigureServices(IServiceCollection services)
		{
			services.AddOptions();

			// configure the json serialization
			services.AddMvc().AddJsonOptions(settings =>
			{
				settings.SerializerSettings.Formatting = Formatting.Indented;
				settings.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
				settings.SerializerSettings.DateFormatHandling = DateFormatHandling.IsoDateFormat;
				settings.SerializerSettings.DateTimeZoneHandling = DateTimeZoneHandling.Utc;
				settings.SerializerSettings.DateParseHandling = DateParseHandling.DateTime;
				settings.SerializerSettings.Converters.Add(new StringEnumConverter());
			});

			// Add application services.
			services.AddSingleton<INoteRepository>(new Mocks.NoteRepositoryMock());
		}

		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
		public void Configure(IApplicationBuilder app, IHostingEnvironment env)
		{
			app.UseCors(builder =>
			{
				builder.AllowAnyHeader();
				builder.AllowAnyOrigin();
				builder.AllowAnyMethod();
			});

			if (env.IsDevelopment())
			{
				app.UseDeveloperExceptionPage();
				app.UseDatabaseErrorPage();
			}
			else
			{
				app.UseExceptionHandler("/Home/Error");
			}

			app.UseMvc();
			app.UseStaticFiles();  // otherwise static files will not be served. but should probably be more tight
		}
	}
}
