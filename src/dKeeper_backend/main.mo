import Array "mo:base/Array";
import Nat "mo:base/Nat";
import Debug "mo:base/Debug";
import Int "mo:base/Int";

persistent actor DKeeper {

  public type Note = {
    title : Text;
    content : Text;
  };

  stable var notes : [Note] = [];

  public func createNote(titleText : Text, contentText : Text) : async () {
    let newNote : Note = { title = titleText; content = contentText };
    notes := Array.append([newNote], notes); 
  };

  public query func readNotes() : async [Note] {
    notes
  };

  public func removeNote(id : Nat) : async () {
  if (id >= notes.size()) {
    return;
  };
  

  let front = Array.subArray<Note>(notes, 0, id);
  let back = Array.subArray<Note>(
    notes,
    id + 1,
    notes.size() - (id + 1)
  );

  notes := Array.append(front, back);
};

}