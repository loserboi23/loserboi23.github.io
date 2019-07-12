var styles = getComputedStyle(document.documentElement);
//document.documentElement.style.setProperty('--primary',secondary);

var pathname = window.location.pathname;

if (pathname == "/projects.html")
{
    var secondary = styles.getPropertyValue('--secondary');
    document.documentElement.style.setProperty('--primary',secondary);
}
else if (pathname == "/contact.html")
{
    var tritary = style.getPropertyValue('--tritary');
    document.documentElement.style.setProperty('--primary',tritary);   
}
else
{

}