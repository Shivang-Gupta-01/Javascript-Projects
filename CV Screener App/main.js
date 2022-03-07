console.log("This is my index.js");
// Data is an array of objects which contains information about the candidates
const data = [
  {
    name: "Abhinandan Mishra",
    age: 18,
    city: "Kolkata",
    language: "Python",
    framework: "Django",
    image: "https://randomuser.me/api/portraits/men/51.jpg",
  },

  {
    name: "Shubham Sharma",
    age: 28,
    city: "Bangalore",
    language: "JavaScript",
    framework: "Angular",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
  },

  {
    name: "Camella Cabello",
    age: 18,
    city: "Kolkata",
    language: "Python",
    framework: "Django",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
  },

  {
    name: "Aishwariya Rai",
    age: 45,
    city: "Mumbai",
    language: "Python",
    framework: "Flask",
    image: "https://randomuser.me/api/portraits/women/57.jpg",
  },

  {
    name: "Rohit Sharma",
    age: 34,
    city: "Jharkhand",
    language: "Go",
    framework: "Go Framework",
    image: "https://randomuser.me/api/portraits/men/61.jpg",
  },
];

// Making an iterator
// CV iterator
function cvIterator(profiles) {
  let nextIndex = 0;
  return {
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}

// button listener for next button

const next = document.getElementById("next");
next.addEventListener("click", nextCV);

const candidates = cvIterator(data);
nextCV();
function nextCV() {
  const CurrentCandidate = candidates.next().value;
  let image = document.getElementById("image");
  let profile = document.getElementById("profile");

  if (CurrentCandidate != undefined) {
    image.innerHTML = `<img src="${CurrentCandidate.image}">`;
    profile.innerHTML = `<ul class="list-group>
    <li class="list-group-item">Name: ${CurrentCandidate.name}</li>
    <li class="list-group-item">${CurrentCandidate.age} years old</li>
    <li class="list-group-item">Lives in ${CurrentCandidate.city}</li>
    <li class="list-group-item">Primarily works on ${CurrentCandidate.language}</li>
    <li class="list-group-item">Uses ${CurrentCandidate.framework} framework</li>
    <ul>`;
  }
  else{
      alert('End of Applications');
      window.location.reload();
  }
}
