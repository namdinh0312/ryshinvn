using System.Linq;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.ResponseCompression;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Net.Http.Headers;

namespace Ryshin.Cdn
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddResponseCaching();
            services.AddResponseCompression(options =>
                {
                    options.EnableForHttps = true;
                    //options.Providers.Add(new BrCompressionProvider());//Use brotli . remove to switch to gzip
                    options.MimeTypes = ResponseCompressionDefaults.MimeTypes.Concat(new[] {
                        "application/xhtml+xml",
                        "application/atom+xml",
                        "image/svg+xml"
                    });
                }
            );
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app)
        {
            app.UseResponseCompression();
            app.UseStaticFiles(new StaticFileOptions
            {
                OnPrepareResponse = ctx =>
                {
                    ctx.Context.Response.Headers[HeaderNames.CacheControl] = "public,max-age=31536000";
                }
            });

            //app.UseETagger();
        }
    }
}
