const EventCenter = (function () {
  const events = {}

  function on(evt, handler) {
    events[evt] = events[evt] || []
    events[evt].push({
      handler,
    })
  }

  function fire(evt, args) {
    if (!events[evt]) return

    for (let i = 0; i < events[evt].length; i++) {
      events[evt][i].handler(args)
    }
  }

  return {
    on,
    fire,
  }
})()

module.exports = EventCenter


// EventCenter.on('text-change', function(data){
//  console.log(data);
// });

// EventCenter.fire('text-change', 100);