
$(() => {
  const audioHandler = (ev) => {
    if (!(ev.key in keyAction) || !(ev.type in keyAction[ev.key])) return;
    keyAction[ev.key][ev.type]()
  }
  
  ['keydown'].forEach((evType) => {
    document.body.addEventListener(evType, audioHandler);
  });
});
