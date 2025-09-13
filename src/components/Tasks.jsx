import { useEffect, useState } from "react";
import { db, auth } from "../firebase";
import { collection, addDoc, query, where, onSnapshot } from "firebase/firestore";

export default function Tasks({ user }) {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (!user) return;
    const q = query(collection(db, "tasks"), where("uid", "==", user.uid));
    const unsub = onSnapshot(q, (snapshot) => {
      setTasks(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsub();
  }, [user]);

  async function addTask() {
    if (!task.trim()) return;
    try {
      await addDoc(collection(db, "tasks"), {
        uid: user.uid,
        text: task,
        createdAt: new Date()
      });
      setTask("");
    } catch (err) {
      alert(err.message);
    }
  }

  if (!user) {
    return <p>Please log in to manage tasks.</p>
  }

  return (
    <div>
      <h2>Your Tasks</h2>
      <input
        type="text"
        placeholder="New task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((t) => (
          <li key={t.id}>{t.text}</li>
        ))}
      </ul>
    </div>
  );
}
