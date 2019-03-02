using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Serialization;

namespace Notes.Web
{
	public class NotesApplication
	{
		public NotesApplication(IHostingEnvironment hostingEnvironment, ILoggerFactory loggerFactory)
		{
		}

		public void ConfigureServices(IServiceCollection services)
		{
			services.AddSingleton<IActionContextAccessor, ActionContextAccessor>();
			services.AddOptions();
			services.AddMvc().AddJsonOptions(settings =>
			{

				settings.SerializerSettings.Formatting = Formatting.None;
				settings.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
				settings.SerializerSettings.DateFormatHandling = DateFormatHandling.IsoDateFormat;
				settings.SerializerSettings.DateTimeZoneHandling = DateTimeZoneHandling.Utc;
				settings.SerializerSettings.DateParseHandling = DateParseHandling.DateTime;
				settings.SerializerSettings.Converters.Add(new StringEnumConverter());
			});

			// Add application services.
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
			app.UseStaticFiles();
		}
	}
}
