/**
 * Created by yym on 2017/11/24.
 */

require("less/index.less")

var NoteManager = require("../mod/note-manage.js").NoteManager
var Event = require("../mod/event.js")
var WaterFall = require("../mod/waterfall.js")

NoteManager.load()

$(".add-note").on("click", function () {
  NoteManager.add()
})

Event.on("waterfall", function () {
  WaterFall.init($("#content"))
})
