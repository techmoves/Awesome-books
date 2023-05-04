window.onload = function()
{
    const path = window.location.pathname.split("/");

    switch (path[1]) {
      case "home": {
        loadPage("home");
        break;
      }
      case "list": {
        loadPage("list");
        break;
      }
      case "add new": {
        loadPage("add new");
        break;
      }
      case "contact": {
        loadPage("contact");
        break;
      }
    }
    document.querySelectorAll(".menu").forEach((item)=>
    {
        item.addEventListener("click",function()
        {
            const path = item.getAttribute("value");
            loadPage(path);
            if (path == "")
            {
                window.history.pushState("","","/")
                return;
            }
            window.history.pushState("","",path);
        });
        
    });
    function loadPage($path)
    {
        if($path == "")
        return;

        const container = Document.getElementById("container");

        const request = new XMLHttpRequest();
        request.open("GET", "pages/" +$path + ".html");
        request.send();
        request.onload = function()
        {
            if(request.status ==200)

            {
                container.innerHTMl = request.responseText;
                document.title = $path;
            }
        }
    
    }
    
}