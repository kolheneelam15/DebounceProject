function groupTasksByStatus(tasks) {
    return tasks.reduce((acc, task) => {
        const { status, title } = task;
        if (!acc[status]) {
            acc[status] = [];
        }
        acc[status].push(title);
        return acc;
    }, {});
}

function test() {
    const input = [
        { id: 1, title: 'Setup project', status: 'todo' },
        { id: 2, title: 'Write unit tests', status: 'in‐progress' },
        { id: 3, title: 'Deploy to staging', status: 'done' },
        { id: 4, title: 'Fix bugs', status: 'in‐progress' },
    ];
    const expected = {
        'todo': ['Setup project'],
        'in‐progress': ['Write unit tests', 'Fix bugs'],
        'done': ['Deploy to staging']
    };
    const output = groupTasksByStatus(input);
    console.log(JSON.stringify(output) === JSON.stringify(expected) ? 'Passed' : 'Failed');
}

test();