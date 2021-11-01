import Cookie from '../util/Cookie.js';

export const GAME_MODES = {
    normal: 'normal',
    adventure: 'adventure',
    hardcore: 'hardcore',
};

const IDS = {
    select: 'game-mode',
    descriptionPrefix: 'game-mode-info-',
};

export function displayGameModeInfo() {
    const gameModeSelectEl = document.getElementById(IDS.select);
    const selectedGameMode = gameModeSelectEl.value;

    Cookie.bake('gameMode', selectedGameMode);

    for (const mode in GAME_MODES) {
        const descriptionEl = document.getElementById(
            IDS.descriptionPrefix + mode
        );

        if (selectedGameMode == mode) {
            descriptionEl.style.display = 'block';
        } else {
            descriptionEl.style.display = 'none';
        }
    }
}