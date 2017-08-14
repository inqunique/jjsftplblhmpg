using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PlableHomepage.Models;
using MimeKit;
using MailKit.Net.Smtp;

namespace PlableHomepage.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Item()
        {
            return View();
        }

        [HttpGet]
        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        [HttpPost]
        public IActionResult Contact(MailingModel form)
        {
            var message = new MimeMessage();
            message.From.Add(new MailboxAddress("plable.homepage", "rubiwind@naver.com"));
            message.To.Add(new MailboxAddress("plable.contact", "rubiwind@naver.com"));
            message.Subject = "Plable Homepage - Contact";
            message.Body = new TextPart("plain")
            {
                Text = String.Format("NAME: {0}{3}{3}E-MAIL: {1}{3}{3}MESSAGE: {2}{3}{3}", form.Name, form.Email, form.Text, Environment.NewLine)
            };

            using (var client = new SmtpClient())
            {
                client.Connect("localhost", 25);
                client.Send(message);
                client.Disconnect(true);
            }

            return View();
        }

        public IActionResult Solution()
        {
            return View();
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}