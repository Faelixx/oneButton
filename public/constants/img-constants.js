
$(() => {
  const imgHandler = (ev) => {
    if (!(ev.key in imgAction) || !(ev.type in imgAction[ev.key])) return;
    imgAction[ev.key][ev.type]()
  }

  ['keydown', 'keyup'].forEach((evType) => {
    document.body.addEventListener(evType, imgHandler);
  })
});
