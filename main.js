let content = document.querySelector('.content');

const emoticonsMassif = [
    { smiley: "😀", votes: 0 },
    { smiley: "😁", votes: 0 },
    { smiley: "😂", votes: 0 },
    { smiley: "😅", votes: 0 },
    { smiley: "🗽", votes: 0 }
];

emoticonsMassif.forEach(bloc => {
    let wrapper = document.createElement("div")

    let smileyBloc = document.createElement('div');
    smileyBloc.textContent = bloc.smiley;
    wrapper.appendChild(smileyBloc);
    smileyBloc.classList.add('smiley-bloc')

    let votesElement = document.createElement('div');
    votesElement.textContent = bloc.votes;
    wrapper.appendChild(votesElement);
    votesElement.classList.add('votes-bloc')

    content.appendChild(wrapper);

    smileyBloc.addEventListener('click', () => {
        bloc.votes++;
        votesElement.textContent = bloc.votes;
    });

});
