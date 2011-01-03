document.on("mouseover", ".hoverable", function(e,el) {
  if (!el.up('.hoverbox')) {
    var hoverbox = new Element('div', { 'class': 'hoverbox' })
    el.wrap(hoverbox)
    hoverbox.insert({ bottom: "<div class='arrow'></div>" })
    hoverbox.insert({ bottom: "<div class='panel'>"+el.readAttribute('title')+"</div>" })
    el.writeAttribute('title', null)
  }
})
