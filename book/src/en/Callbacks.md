# Callbacks (Haxe & Lua)
For a quick intro; Callbacks are essentially events that are called so you can put pretty much whatever you want in them in form of a script, just like triggers on GD!
- Both Haxe and Lua are compatible for these scripts but have different function names for compatibility reasons.

## Example [Haxe]
```Haxe
import flixel.FlxG;

public var hSpr:FlxSprite;

// Use onCreate() instead of create(), your copy of ALE Psych will thank you.
function onCreate(){
  hSpr = new FlxSprite().makeGraphic(FlxG.width, FlxG.width, FlxColor.WHITE);
    for(e in [hSpr]){
      add(e);
    }
}

// This will be triggered every beat.
function onSafeBeatHit(curBeat:Int){
  debugTrace('Hi ' +curBeat);
}

// This will be triggered everytime a note is hit. (Including the opponent)
function postNoteHit(note:Note, rating:String, character:Character){
  debugTrace(note.data +rating +character.id);
}
```

## All Callbacks

* = on / post

* Create()

* Update(elapsed:Float)

* Destroy()

* StepHit(curStep:Int)

* BeatHit(curBeat:Int)

* SectionHit(curSection:Int)

* SafeStepHit(safeStep:Int)

* SafeBeatHit(safeBeat:Int)

* SafeSectionHit(safeSection:Int)

* OnFocus()

* OnFocusLost()

* OpenSubState(substate:FlxSubState) // Haxe
* OpenSubState(className:String) // Lua

* CloseSubState()

* Pause()

* Resume()

* Restart()

* Exit()

* CountdownStart()

* CountdownTick(val:Int, graphic:FlxGraphic, sound:Sound) // Haxe
* CountdownTick(val:Int) // Lua

* SongStart()

* SongEnd()

* NoteStack(note:Note)

* NoteHit(note:Note, rating:Rating, character:Character, removeNote:Bool) // Haxe
* NoteHit(rating:Rating, removeNote:Bool) // Lua

* NoteMiss(note:Note, character:Character)

* EventsInit()

* EventListStack(eventList:ALEEventList)

* EventHit(eventId:String, ...values)

* ControlsInit()

* JustPressedKey(event:KeyboardEvent) // Haxe
* JustPressedKey(keyCode:Int) // Lua

* JustReleasedKey(event:KeyboardEvent) // Haxe
* JustReleasedKey(keyCode:Int) // Lua

* CamerasInit()

* CameraMove(character:Character)

* StrumLinesInit()

* CharacterAdd(character:Character)

* CharacterChange(character:Character, newChar:String) // Haxe
* CharacterChange(newChar:String) // Lua

* CharacterPositionReset(character:Character)

* HudInit()

* IconAdd(icon:Icon)

* ScoreTextUpdate()

* ComboInit()

* ComboDisplay(rating:Rating)

* HealthUpdate()

* GameOver()

* SoundsInit()

* VocalAdd(vocal:FlxSound) // Haxe
* VocalAdd() // Lua

* VocalsResync()

* MusicPause()

* MusicResume()

* ScoreSave()
