window.onload = () => {
    const button = document.querySelector('button[data-action="change"]');
    button.innerText = '﹖';

    let places = staticLoadPlaces();
    renderPlaces(places);
};

function staticLoadPlaces() {
    return [
        {
            name: 'Pokèmon',
            location: {
                 lat: 19.292228,
                 lng: -99.782756,
            },
        },
    ];
}

var models = [
    {
        url: 'data:image/jpeg;base64,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',
        scale: '0.5 0.5 0.5',
        info: 'Magnemite, Lv. 5, HP 10/10',
        rotation: '0 180 0',
    },
    {
        url: './assets/articuno/scene.gltf',
        scale: '0.2 0.2 0.2',
        rotation: '0 180 0',
        info: 'Articuno, Lv. 80, HP 100/100',
    },
    {
        url: './assets/dragonite/scene.gltf',
        scale: '0.08 0.08 0.08',
        rotation: '0 180 0',
        info: 'Dragonite, Lv. 99, HP 150/150',
    },
];

var modelIndex = 0;
var setModel = function (model, entity) {
    if (model.scale) {
        entity.setAttribute('scale', model.scale);
    }

    if (model.rotation) {
        entity.setAttribute('rotation', model.rotation);
    }

    if (model.position) {
        entity.setAttribute('position', model.position);
    }

    entity.setAttribute('gltf-model', model.url);

    const div = document.querySelector('.instructions');
    div.innerText = model.info;
};

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {
        let latitude = place.location.lat;
        let longitude = place.location.lng;

        let model = document.createElement('a-entity');
        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);

        setModel(models[modelIndex], model);

        model.setAttribute('animation-mixer', '');

        document.querySelector('button[data-action="change"]').addEventListener('click', function () {
            var entity = document.querySelector('[gps-entity-place]');
            modelIndex++;
            var newIndex = modelIndex % models.length;
            setModel(models[newIndex], entity);
        });

        scene.appendChild(model);
    });
}
