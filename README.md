The problem:
For example, vault encounter of last wish. Once you figure out pens and ants, most teams will use text chat to save the info. This avoids having to remember, but requires someone to briefly stop in order to type.

The idea:
By using the WebSpeech API, we can define a jsfg grammar that can define a small set of verbal commands. These commands can be parsed in order to automate some of the note taking described above.

For instance, instead of typing: 'fa rp', you can say: 'forest ant, rock pen'. Once the app hears it, the input can be used.

For this project to work, a usable grammar is essential, that way the speech commands can be:
  Tokenized: Makes it significantly easier to extract semantics from the command.
  Accurate: Avoids basic mistakes. For instance 'and' and 'ant' being confused.

For now, only google chrome supports the WebSpeech API.
