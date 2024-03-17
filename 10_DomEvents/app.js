/* 
  DOM Events : Way-1 to trigger DOM events (Inline DOM Events)
  Events are signals that something has occurred. (user inputs/actions)
  Events are basically triggerred by user inputs or our own actions
  
JavaScript Events CheatSheet :

1. Mouse Events
  (a) onclick — When a user clicks on an element, an event is triggered.

  (b) oncontextmenu — When a user right-clicks on an element, a context menu appears.

  (c) ondblclick — When a user double-clicks on an element, it is called ondblclick.

  (d) onmousedown — When a user moves their mouse over an element, it is called onmousedown.

  (e) onmouseenter — The mouse pointer is moved to a certain element.

  (f) onmouseleave — The pointer leaves an element.

  (g) onmousemove — When the pointer is over an element, it moves.

  (h) onmouseover — When the cursor is moved onto an element or one of its descendants, the term onmouseover is used.

  (i)  onmouseout — When the user moves the mouse cursor away from an element or one of its descendants, it is called onmouseout.

  (j) onmouseup — When a user releases a mouse button while hovering over an element, it is known as onmouseup.

2. Form Events :
  (a) onblur — When an element loses focus, it is called onblur.

  (b) onchange — A form element’s content changes. (for the input>, select>, and textarea> elements)

  (c) onfocus — An aspect is brought into focus.

  (d) onfocusin — When an element is ready to become the centre of attention.

  (e) onfocusout — The element is about to lose focus.

  (f) oninput — When a user inputs something into an element, it’s called oninput.

  (h) oninvalid — If an element isn’t valid, it’s called oninvalid.

  (i) onreset — The state of a form is reset.

  (j) onsearch — A user enters text into a search field (for input=”search”>).

  (k) onselect — The user chooses some text (input> and textarea>).

  (l) onsubmit — A form is filled out and submitted.

3. Drag Events :
  (a) ondrag — When an element is dragged, it is called ondrag.

❖ ondragend — The element has been dragged to its final position.

❖ ondragenter — When a dragged element enters a drop target, it is called ondragenter.

❖ ondragleave — When a dragged element departs the drop target, it is called ondragleave.

❖ ondragover — The dropped element is on top of the dragged element.

❖ ondragstart — The user begins dragging an element.

❖ ondrop — When a dragged element is dropped on a drop target, it is called ondrop.

Keyboard Events
❖ onkeydown — When the user presses a key down

❖ onkeypress — When the user begins to press a key.

❖ onkeyup — A key is released by the user.

Frame Events
❖ onabort — The loading of a media is aborted with onabort.

❖ onerror — When loading an external file, an error occurs.

❖ onpagehide — When a user leaves a webpage, it is called onpagehide.

❖ onpageshow — When the user navigates to a webpage

❖ onhashchange — The anchor component of a URL has been changed.

❖ onload — When an object has loaded

❖ onresize — The document view gets resized when onresize is called.

❖ onscroll — The scrollbar of an element is being scrolled.

❖ onbeforeunload — Before the document is due to be emptied, an event occurs.

❖ onunload — When a page is emptied, this event occurs.

Animation Events
❖ animationstart — The animation in CSS has begun.

❖ animationend — When a CSS animation is finished, it is called animationend.

❖ animationiteration — CSS animation is repeated using animationiteration.

Clipboard Events
❖ oncut — The content of an element is cut by the user.

❖ onpaste — When a user pastes material into an element, it is called onpaste.

❖ oncopy — The content of an element is copied by the user

Media Events
❖ onloadeddata — Media data has been loaded

❖ onloadedmetadata — Metadata is loaded (such as size and duration).

❖ onloadstart — The browser begins looking for the media that has been specified.

❖ onabort — The loading of media has been halted.

❖ onerror — When an error occurs while loading an external file, the event onerror is triggered.

❖ onpause — Media is paused, either manually or automatically, by the user.

❖ onplay — The video or audio has begun or is no longer paused.

❖ onstalled — The browser is attempting to load the media, but it is not currently accessible.

❖ oncanplay — The browser has the ability to begin playing media (e.g. a file has buffered enough)

❖ oncanplaythrough — The browser is capable of playing media without pausing.

❖ ondurationchange — The media’s duration changes.

❖ onended — The media’s time has come to an end.

❖ onsuspend — The browser is not loading media on purpose.

❖ ontimeupdate — The situation has shifted (e.g. because of fast forward)

❖ onvolumechange — The volume of the media has changed (including mute)

❖ onwaiting — The media has taken a break, but it is anticipated to resume soon (for example, buffering)

❖ onplaying — Media that has been paused or halted for buffering is now playing.

❖ onprogress — The media is being downloaded by the browser.

❖ onratechange — The media’s playback speed changes.

❖ onseeking — The user begins to move/skip.

Miscellaneous Events
❖ transitionend — When a CSS transition is complete, this event is triggered.

❖ onmessage — The event source has received a message.

❖ onpopstate — When the history of the window changes

❖ onshow — A element is shown as a context menu when it is onshow.

❖ onoffline — The browser switches to offline mode.

❖ ononline — The browser enters the online mode.

❖ ontouchcancel — The user’s ability to touch the screen has been halted.

❖ ontouchstart — The touch-screen is activated by placing a finger on it.

❖ onstorage — An part of Web Storage has been upgraded.

❖ ontoggle — The user toggles the details> element open or closed.

❖ onwheel — The mouse wheel moves up and down when it passes over an element.

❖ ontouchend — A touch-screen user’s finger is withdrawn.

❖ ontouchmove — When a finger is dragged over the screen, it is called ontouchmove.


 */ 
