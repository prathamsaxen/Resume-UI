// Copy Data Functions For Contact Info
function onphone()
{
    navigator.clipboard.writeText(document.getElementById('copiedphone').innerHTML);
}
function onemail()
{
    navigator.clipboard.writeText(document.getElementById('copiedemail').innerHTML);
}
