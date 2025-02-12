{js:
const getBuff = (path, yop) => fetch(yop ? "http://hawix0.github.io/fictional-happiness/src/" + path : path).then(res=>res.arrayBuffer());
const avatar = "{avatar:{js:(ctx.target=(message?.referenced_message?.author \|\|
		message?.mentions?.[0] \|\| // .mentions broken in assyst v1, fixed in assyst rewrite i hope
		message.author),ctx.target)?.id}}";
{ignore:(async()=>{
    const target = ctx.target; // (it's set in the js block inside avatar variable)
    const getDefaultAvatarIndex = (user) => user.discriminator === "0" ? Math.abs((user.id << 22) % 6) : user.discriminator % 5;
	const now = new Date();
	let avatar = await fetch(`https://cdn.discordapp.com/avatars/${target.id}/${target.avatar}.png?size=512`)
	    .then((x) => x.arrayBuffer())
		.then(ImageScript.decode)
		.catch((e) => 
		    getBuff(`http://cdn.discordapp.com/embed/avatars/${getDefaultAvatarIndex(target)}.png`)
	            .then(ImageScript.decode)
	    );
	    
	const overlay = await getBuff(`assets/oulays/framediscordblue.png`, 1)
		.then(ImageScript.decode)
        .catch(e=>{throw `Failed to load/download overlay image\n${e?.stack??e}`});
        
	const pusab = await getBuff(`assets/fonts/ggsans/ggsans-Semibold.ttf`, 1)
        .then((a) => new Uint8Array(a))
        .catch(e=>{throw `Failed to load/download font "ggsans-Semibold"\n${e?.stack??e}`});

	const layout = new ImageScript.TextLayout({
		maxHeight: 100,
		horizontalAlign: "bottom",
	});
	let sign = await ImageScript.Image.renderText(
		ggsans-Semibold,
		98,
		target.username,
		0x00FFFFFF,
		layout
	);
	avatar.contain(overlay.width, overlay.height)
	avatar.composite(overlay, 0, 0)
	avatar.composite(sign, 20, 20)
	return avatar.encode(9);
})();}}
