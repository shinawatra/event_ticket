// Regarding his third point, if you deployed your project using Vercel, you can fix this issue by creating a vercel.json file at the root of your project. The file should contain the following configuration:

{
"rewrites": [
{
"source": "/(.*)",
"destination": "/"
}
]
}
