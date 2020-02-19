const GameData = {
    "playerTypeVariables": {

    },
    "entityTypeVariables": {

    },
    "particleTypes": {
        "9ijSYCQ9NH": {
            "velocityVector": {
                "maxVector": {
                    "y": 0.01,
                    "x": 0.03
                },
                "minVector": {
                    "y": -0.01,
                    "x": 0
                },
                "baseVector": {
                    "y": 0,
                    "x": 0.01
                }
            },
            "mountPosition": {
                "y": 0,
                "x": 0
            },
            "deathOpacityBase": 0.1,
            "quantityTimespan": 700,
            "quantityBase": 100,
            "lifeBase": 700,
            "color": "#000000",
            "name": "shell"
        },
        "uEqQ4hrXbE": {
            "dimensions": {
                "height": 1,
                "width": 1
            },
            "velocityVector": {
                "maxVector": {
                    "y": 0.3,
                    "x": 0.3
                },
                "minVector": {
                    "y": -0.3,
                    "x": -0.3
                },
                "baseVector": {
                    "y": 0,
                    "x": 0
                }
            },
            "mountPosition": {
                "y": 0,
                "x": 0
            },
            "deathOpacityBase": 0,
            "quantityTimespan": 300,
            "quantityBase": 100,
            "lifeBase": 300,
            "color": "#00bd1a",
            "name": "zombie blood"
        },
        "lUXvIVnU6G": {
            "velocityVector": {
                "maxVector": {
                    "y": 0,
                    "x": 0.05
                },
                "minVector": {
                    "y": -1,
                    "x": -0.05
                },
                "baseVector": {
                    "y": -1,
                    "x": 0
                }
            },
            "mountPosition": {
                "y": 35,
                "x": 0
            },
            "deathOpacityBase": 1,
            "quantityTimespan": 500,
            "quantityBase": 80,
            "lifeBase": 500,
            "color": "#ffc729",
            "name": "bullet"
        },
        "k4HSd1axqA": {
            "velocityVector": {
                "maxVector": {
                    "y": 1,
                    "x": 1
                },
                "minVector": {
                    "y": -1,
                    "x": -1
                },
                "baseVector": {
                    "y": 0,
                    "x": 0
                }
            },
            "mountPosition": {
                "y": 35,
                "x": 0
            },
            "deathOpacityBase": 0.5,
            "quantityTimespan": 70,
            "quantityBase": 40,
            "lifeBase": 50,
            "color": "#f4ff00",
            "name": "spark"
        }
    },
    "particles": {
        "87BiLybZhy": {
            "velocityVector": {
                "maxVector": {
                    "y": 1,
                    "x": 1
                },
                "minVector": {
                    "y": -1,
                    "x": -1
                },
                "baseVector": {
                    "y": 0,
                    "x": 0
                }
            },
            "mountPosition": {
                "y": 0,
                "x": 0
            },
            "deathOpacityBase": 1,
            "quantityTimespan": 30,
            "quantityBase": 1,
            "lifeBase": 50,
            "color": "#636363",
            "name": "bullet"
        },
        "7pA9mm1MLG": {
            "velocityVector": {
                "maxVector": {
                    "y": 1,
                    "x": 1
                },
                "minVector": {
                    "y": -1,
                    "x": -1
                },
                "baseVector": {
                    "y": 0,
                    "x": 0
                }
            },
            "mountPosition": {
                "y": 0,
                "x": 0
            },
            "deathOpacityBase": 1,
            "quantityTimespan": 30,
            "quantityBase": 5,
            "lifeBase": 30,
            "color": "#f4ff00",
            "name": "spark"
        }
    },
    "playerTypes": {
        "X90ySSRC3b": {
            "variables": {
                "progression": {
                    "dataType": "number",
                    "default": 0
                }
            },
            "relationships": {
                "w1NiT3YV0e": "hostile"
            },
            "color": "#d44950",
            "attributes": {
                "XQqqJIZ0o4": {
                    "decimalPlaces": 0,
                    "color": "white",
                    "showAsHUD": true,
                    "displayValue": false,
                    "isVisible": false,
                    "regenerateSpeed": 5,
                    "value": 100,
                    "dataType": "",
                    "max": 100,
                    "min": 0,
                    "name": "centerTextCooldown"
                },
                "1QtjsHQebg": {
                    "displayValue": false,
                    "name": "Speed Multiplier",
                    "min": 1,
                    "max": "6.5",
                    "value": 1,
                    "regenerateSpeed": 0,
                    "isVisible": true,
                    "showAsHUD": true,
                    "color": "white"
                },
                "LrYGviDwbd": {
                    "name": "Kills",
                    "min": 0,
                    "max": 40,
                    "value": 0,
                    "regenerateSpeed": 0,
                    "isVisible": false,
                    "showAsHUD": true,
                    "color": "red"
                },
                "n5JEoENeGg": {
                    "decimalPlaces": 0,
                    "displayValue": false,
                    "color": "#ff9600",
                    "showAsHUD": true,
                    "isVisible": true,
                    "regenerateSpeed": 0,
                    "value": 100,
                    "max": 299999,
                    "min": 0,
                    "name": "Points"
                },
                "8zsQ2uYSuI": {
                    "decimalPlaces": 0,
                    "color": "white",
                    "showAsHUD": true,
                    "displayValue": false,
                    "isVisible": false,
                    "regenerateSpeed": "-.2",
                    "value": 200,
                    "dataType": "",
                    "max": 200,
                    "min": 0,
                    "name": "adCooldown"
                }
            },
            "name": "Zombie",
            "showNameLabel": true
        },
        "w1NiT3YV0e": {
            "showNameLabel": true,
            "attributes": {
                "8zsQ2uYSuI": {
                    "decimalPlaces": 0,
                    "color": "white",
                    "showAsHUD": true,
                    "displayValue": false,
                    "isVisible": false,
                    "regenerateSpeed": "-.2",
                    "value": 200,
                    "dataType": "",
                    "max": 200,
                    "min": 0,
                    "name": "adCooldown"
                },
                "IZXbE1FZox": {
                    "name": "Survived",
                    "min": 0,
                    "max": 100000,
                    "value": 0,
                    "regenerateSpeed": 0,
                    "isVisible": false,
                    "showAsHUD": true,
                    "color": "white"
                },
                "n5JEoENeGg": {
                    "color": "#ff9600",
                    "showAsHUD": true,
                    "isVisible": true,
                    "regenerateSpeed": 0,
                    "value": 500,
                    "max": 299999,
                    "min": 0,
                    "name": "Points",
                    "displayValue": false,
                    "decimalPlaces": 0
                },
                "1QtjsHQebg": {
                    "color": "white",
                    "showAsHUD": true,
                    "isVisible": true,
                    "regenerateSpeed": 0,
                    "value": 1,
                    "max": "3.2",
                    "min": 0,
                    "name": "Speed Multiplier",
                    "displayValue": false
                }
            },
            "relationships": {
                "X90ySSRC3b": "hostile",
                "WARiuSXpmG": "hostile"
            },
            "name": "Human",
            "variables": {
                "progression": {
                    "default": 0,
                    "dataType": "number"
                }
            },
            "color": "white"
        },
        "Yefn7qxVes": {
            "name": "Neutral",
            "attributes": {

            },
            "color": "white",
            "relationships": {

            },
            "showNameLabel": false
        }
    },
    "factions": {
        "PgVCU0WgYj": {
            "relationships": {

            },
            "name": "fda"
        },
        "6BTQoFGUFP": {
            "attributes": {
                "4P4pWD5ExV": {
                    "showAsHUD": true,
                    "color": "yellow",
                    "isVisible": true,
                    "regenerateSpeed": 0.3,
                    "value": "100",
                    "max": "100",
                    "min": 0,
                    "name": "Stamina"
                }
            },
            "relationships": {

            },
            "name": "asdf"
        }
    },
    "images": [
        {
            "url": "https://modd.s3.amazonaws.com/sprites/1512752415166_fire_shotgun.mp3",
            "key": "sound"
        },
        {
            "url": "https://modd.s3.amazonaws.com/sprites/1512755562800_fire_empty.mp3",
            "key": "sound"
        },
        {
            "url": "https://modd.s3.amazonaws.com/sprites/1512755594697_fire_minigun.mp3",
            "key": "sound"
        },
        {
            "url": "https://modd.s3.amazonaws.com/sprites/1512755610131_fire_pistol.mp3",
            "key": "sound"
        },
        {
            "url": "https://modd.s3.amazonaws.com/sprites/1512755622475_fire_rifle.mp3",
            "key": "sound"
        },
        {
            "url": "https://modd.s3.amazonaws.com/sprites/1512755644317_man_cough.mp3",
            "key": "sound"
        },
        {
            "url": "https://modd.s3.amazonaws.com/sprites/1512755666761_man_scream1.mp3",
            "key": "sound"
        },
        {
            "url": "https://modd.s3.amazonaws.com/sprites/1512755675893_man_scream2.mp3",
            "key": "sound"
        },
        {
            "url": "https://modd.s3.amazonaws.com/sprites/1512756015200_reload.mp3",
            "key": "sound"
        }
    ],
    "settings": {
        "prettifyingScoreboard": false,
        "latency": 67,
        "displayScoreboard": true,
        "allowDuplicateIPs": true,
        "scoreAttributeId": "n5JEoENeGg",
        "scoreBoard": "n5JEoENeGg",
        "gravity": {
            "y": 0,
            "x": 0
        },
        "menudiv": "<b>How to play?</b>\n<br />\nW, A, S, D to move<br />\nUse mouse to spin<br />\nPress [B] to buy items\n<br /><a href=\"http://www.braains2.io\">\nDid you know Braains 2 was out?!</a>",
        "images": {
            "cover": "https://modd.s3.amazonaws.com/1501275562940_two houses cover.png",
            "logo": "https://modd.s3.amazonaws.com/1501275587842_logo.png"
        },
        "constants": {
            "currency": "Food"
        },
        "camera": {
            "zoom": {
                "type": "static",
                "default": 750
            },
            "trackingDelay": 5
        },
        "shop": {
            "isEnabled": false
        },
        "inventory": {
            "isEnabled": false
        }
    },
    "attributeTypes": {
        "B63bI7RmVw": {
            "color": "white",
            "showAsHUD": true,
            "isVisible": false,
            "regenerateSpeed": 0,
            "value": 0,
            "max": 1000,
            "min": -1000,
            "name": "forceY"
        },
        "v5JkWLylHp": {
            "color": "white",
            "showAsHUD": true,
            "isVisible": false,
            "regenerateSpeed": 0,
            "value": 0,
            "max": 1000,
            "min": -1000,
            "name": "forceX"
        },
        "n5JEoENeGg": {
            "name": "Points",
            "min": 0,
            "max": 1000000,
            "value": 0,
            "regenerateSpeed": 0,
            "isVisible": false,
            "showAsHUD": true,
            "color": "#ff9600",
            "keys": "n5JEoENeGg"
        },
        "XIBc1OnSZt": {
            "color": "#c3efe3",
            "showAsHUD": true,
            "isVisible": false,
            "regenerateSpeed": 0,
            "value": 200,
            "max": 200,
            "min": 0,
            "name": "Speed"
        },
        "K2mih60v2P": {
            "keys": "K2mih60v2P",
            "color": "white",
            "isVisible": true,
            "regenerateSpeed": "-0.2",
            "value": "0",
            "max": "100",
            "min": 0,
            "name": "Immunity",
            "dataType": "",
            "displayValue": false,
            "decimalPlaces": 0
        },
        "1QtjsHQebg": {
            "color": "white",
            "showAsHUD": true,
            "isVisible": true,
            "regenerateSpeed": 0,
            "value": 1,
            "max": 3,
            "min": 0,
            "name": "Speed Multiplier"
        },
        "T6OgiGXZ9S": {
            "decimalPlaces": 0,
            "color": "white",
            "showAsHUD": true,
            "displayValue": false,
            "isVisible": false,
            "regenerateSpeed": "-.2",
            "value": 100,
            "dataType": "",
            "max": 100,
            "min": 0,
            "name": "afkTimer"
        },
        "8zsQ2uYSuI": {
            "decimalPlaces": 0,
            "color": "white",
            "showAsHUD": true,
            "displayValue": false,
            "isVisible": false,
            "regenerateSpeed": "-.2",
            "value": 120,
            "dataType": "",
            "max": 120,
            "min": 0,
            "name": "adCooldown"
        },
        "XQqqJIZ0o4": {
            "decimalPlaces": 0,
            "color": "white",
            "showAsHUD": true,
            "displayValue": false,
            "isVisible": false,
            "regenerateSpeed": 5,
            "value": 100,
            "dataType": "",
            "max": 100,
            "min": 0,
            "name": "centerTextCooldown"
        },
        "TpL30eN1aR": {
            "decimalPlaces": 0,
            "color": "white",
            "showAsHUD": true,
            "displayValue": false,
            "isVisible": false,
            "regenerateSpeed": 0,
            "value": 0,
            "dataType": "",
            "max": 1000,
            "min": 0,
            "name": "Has killed"
        },
        "JNibtUdrRY": {
            "decimalPlaces": 0,
            "color": "white",
            "showAsHUD": true,
            "displayValue": false,
            "isVisible": false,
            "regenerateSpeed": 0,
            "value": 5,
            "dataType": "",
            "max": 15,
            "min": 0,
            "name": "zCooldown"
        }
    },
    "variables": {
        "zombieTimerMessage": {
            "dataType": "string"
        },
        "helpText": {
            "dataType": "string",
            "default": "<b><u>How to Play</u></b><br/> <b>Rules</b><br/> Braains.io is a game of tag where the survivors has to avoid getting touched by the zombies. When the game starts, everyone starts off as the survivors and they have to find a safe place to hide. After 120 seconds, 15% of the population will randomly get selected and turn into the zombies, and whomever that gets in contact with a zombie will turn into a zombie him/herself. If you're one of the remaining survivors, stay alive as long as you can. If you have already turned into a zombie, then find survivors and tag them and earn points! (You can buy items with it) <br/><br/> <b>Controls</b><br/> Move - <span class=\"badge badge-dark\">Arrow Keys</span> or <span class=\"badge badge-dark\">WASD</span><br/> Use item - <span class=\"badge badge-dark\">Left Click</span><br/> Open item shop - <span class=\"badge badge-dark\">B</span><br/> Pick up item - <span class=\"badge badge-dark\">E</span><br/>  Drop item - <span class=\"badge badge-dark\">G</span><br/> <br/><br/> Show this Help again - <span class=\"badge badge-dark\">H</span><br/>"
        },
        "ai": {
            "dataType": "player",
            "default": "computer1"
        },
        "timeLeft": {
            "dataType": "number",
            "default": 10
        },
        "@zombieInfectBonus": {
            "default": 100,
            "dataType": "number"
        },
        "@zombieDecay": {
            "dataType": "number",
            "default": 0.99
        },
        "@timeGameover": {
            "default": 31,
            "dataType": "number"
        },
        "@timeSick": {
            "default": 10,
            "dataType": "number"
        },
        "@timePreoutbreak": {
            "dataType": "number",
            "default": 117
        },
        "@timePostoutbreak": {
            "default": 100,
            "dataType": "number"
        },
        "@outbreakRatio": {
            "dataType": "number",
            "default": "0.15"
        },
        "@humanWinBonusMultiplier": {
            "default": 100,
            "dataType": "number"
        },
        "tempUnit": {
            "dataType": "unit"
        },
        "movementSpeed": {
            "dataType": "number",
            "default": 0
        },
        "victimHuman": {
            "dataType": "unit"
        },
        "state": {
            "default": "preoutbreak",
            "dataType": "string"
        },
        "timerMessage": {
            "default": "",
            "dataType": "string"
        },
        "zombieCount": {
            "default": 0,
            "dataType": "number"
        },
        "randomNumber": {
            "default": 0,
            "dataType": "number"
        },
        "victimIndex": {
            "default": 0,
            "dataType": "number"
        },
        "spawn": {
            "default": {
                "height": 160,
                "width": 300,
                "y": 1932,
                "x": 714
            },
            "dataType": "region"
        },
        "numberOfSickUnits": {
            "dataType": "number",
            "default": 0
        },
        "numberOfUnits": {
            "default": 0,
            "dataType": "number"
        },
        "humanCount": {
            "dataType": "number",
            "default": 0
        },
        "i": {
            "default": 0,
            "dataType": "number"
        }
    },
    "abilities": {
        "Rf4RuVwxTD": {
            "cost": {
                "cast": {

                }
            },
            "scriptName": "YMkMZ064wI",
            "name": "drop"
        },
        "g7gMBiQn6T": {
            "cost": {
                "cast": {

                }
            },
            "scriptName": "FPmP0mVeqG",
            "name": "stop using item"
        },
        "IFcUtJ2d7h": {
            "cost": {
                "cast": {

                }
            },
            "scriptName": "eeQaaUpFeU",
            "name": "stop moving down"
        },
        "JqbSy0uieU": {
            "cost": {
                "cast": {

                }
            },
            "scriptName": "zX0Q6doKxN",
            "name": "stop moving left"
        },
        "T76gPi4bt0": {
            "cost": {
                "cast": {

                }
            },
            "scriptName": "ThQ6FJTMoH",
            "name": "stop moving up"
        },
        "aDAOF5H0iE": {
            "cost": {
                "cast": {

                }
            },
            "scriptName": "j9Vhcbx4qz",
            "name": "stop moving right"
        },
        "VTf4AZmG4Z": {
            "cost": {
                "cast": {

                }
            },
            "scriptName": "ln6972TmhW",
            "name": "move down"
        },
        "V1HQUrwDwd": {
            "cost": {
                "cast": {

                }
            },
            "scriptName": "ppUPGjZfjj",
            "name": "move left"
        },
        "RyD3vCK8RZ": {
            "cost": {
                "cast": {

                }
            },
            "scriptName": "aoxwi5IuXq",
            "name": "move right"
        },
        "fmv89jlJH9": {
            "cost": {
                "cast": {

                }
            },
            "scriptName": "YtZKI0m4CZ",
            "name": "move up"
        },
        "useItem": {
            "type": "useItem",
            "entity": {
                "function": "getItemCurrentlyHeldByUnit"
            },
            "name": "use",
            "scriptName": "5NlaQRez0O",
            "cost": {
                "cast": {

                }
            }
        },
        "o1teHUEmu8": {
            "cost": {
                "cast": {

                }
            },
            "scriptName": "7YM8wp6pKu",
            "name": "open shop"
        },
        "808LDQUst7": {
            "name": "pick up",
            "scriptName": "gz8XL501mw",
            "cost": {

            }
        },
        "hobBUTSbIr": {
            "cost": {

            },
            "scriptName": "gQ7diAr0Em",
            "name": "open help"
        },
        "ztlkmxYxhS": {
            "cost": {

            },
            "scriptName": "2QHXwLnfUm",
            "name": "teleport"
        }
    },
    "unitTypes": {
        "human": {
            "frames": {

            },
            "inventoryImage": "",
            "animations": {
                "TpsmgGVfi5": {
                    "name": "default",
                    "frames": [
                        1
                    ],
                    "loopCount": 0,
                    "framesPerSecond": 0
                }
            },
            "canBePurchasedBy": [],
            "isPurchasable": false,
            "states": {
                "zTzPFYOZkc": {
                    "name": "default",
                    "sound": {

                    },
                    "particles": {

                    },
                    "animation": "TpsmgGVfi5",
                    "body": "TX8R6XstID"
                }
            },
            "sound": {
                "KK9JlU1UQy": {
                    "name": "Cough",
                    "file": "https://modd.s3.amazonaws.com/asset/sound/1517554516253_man_cough.mp3"
                },
                "fEhDyJ8knx": {
                    "name": "Scream",
                    "file": "https://modd.s3.amazonaws.com/asset/sound/1517556903046_man_scream1.mp3"
                }
            },
            "particles": {

            },
            "body": {
                "fixtures": [
                    {
                        "shape": {
                            "type": "rectangle"
                        },
                        "restitution": 0.01,
                        "friction": 0.01,
                        "density": 3
                    }
                ],
                "isFlying": false,
                "fixedRotation": false,
                "bullet": false,
                "allowSleep": true,
                "angularDamping": 1,
                "linearDamping": 5,
                "rotationSpeed": 2,
                "type": "dynamic",
                "height": 40,
                "width": 40,
                "collidesWith": {
                    "units": true,
                    "items": true,
                    "projectiles": true,
                    "walls": true,
                    "unit": true,
                    "item": true,
                    "debris": true
                },
                "z-index": {
                    "layer": 3,
                    "depth": 3
                },
                "name": "Human"
            },
            "spawnPosition": {
                "y": 2200,
                "x": 1500
            },
            "attributes": {
                "K2mih60v2P": {
                    "name": "Immunity",
                    "min": 0,
                    "max": 100,
                    "value": "0",
                    "regenerateSpeed": 0,
                    "isVisible": [
                        "centerBar"
                    ],
                    "color": "#6bb9ce",
                    "keys": "K2mih60v2P",
                    "displayValue": false
                },
                "XIBc1OnSZt": {
                    "name": "Speed",
                    "min": 130,
                    "max": 130,
                    "value": 130,
                    "regenerateSpeed": 0,
                    "isVisible": [],
                    "showAsHUD": true,
                    "color": "#c3efe3",
                    "displayValue": false
                },
                "v5JkWLylHp": {
                    "name": "movingDirectionX",
                    "min": -1,
                    "max": 1,
                    "value": 0,
                    "regenerateSpeed": 0,
                    "isVisible": [],
                    "showAsHUD": true,
                    "color": "white"
                },
                "B63bI7RmVw": {
                    "name": "movingDirectionY",
                    "min": -1,
                    "max": 1,
                    "value": 0,
                    "regenerateSpeed": 0,
                    "isVisible": [],
                    "showAsHUD": true,
                    "color": "white"
                },
                "T6OgiGXZ9S": {
                    "name": "afkTimer",
                    "min": 0,
                    "max": 100,
                    "dataType": "",
                    "value": 100,
                    "regenerateSpeed": "-.1",
                    "isVisible": [],
                    "displayValue": false,
                    "showAsHUD": true,
                    "color": "white",
                    "decimalPlaces": 0
                }
            },
            "abilities": {
                "e": {
                    "mobilePosition": {
                        "x": 390,
                        "y": 62
                    },
                    "keyDown": "808LDQUst7",
                    "keyUp": ""
                },
                "movementWheel": {
                    "mobilePosition": {
                        "x": 3,
                        "y": 231
                    }
                },
                "lookWheel": {
                    "mobilePosition": {
                        "x": 438,
                        "y": 230
                    }
                },
                "w": {
                    "keyUp": "T76gPi4bt0",
                    "keyDown": "fmv89jlJH9"
                },
                "a": {
                    "keyUp": "JqbSy0uieU",
                    "keyDown": "V1HQUrwDwd"
                },
                "s": {
                    "keyUp": "IFcUtJ2d7h",
                    "keyDown": "VTf4AZmG4Z"
                },
                "d": {
                    "keyUp": "aDAOF5H0iE",
                    "keyDown": "RyD3vCK8RZ"
                },
                "button1": {
                    "mobilePosition": {
                        "x": 390,
                        "y": 99
                    },
                    "keyUp": "g7gMBiQn6T",
                    "keyDown": "useItem"
                },
                "r": {
                    "keyUp": "",
                    "keyDown": "sqm3Jypsek"
                },
                "g": {
                    "mobilePosition": {
                        "y": 62,
                        "x": 430
                    },
                    "keyUp": "",
                    "keyDown": "Rf4RuVwxTD"
                },
                "up": {
                    "keyUp": "T76gPi4bt0",
                    "keyDown": "fmv89jlJH9"
                },
                "down": {
                    "keyUp": "IFcUtJ2d7h",
                    "keyDown": "VTf4AZmG4Z"
                },
                "left": {
                    "keyUp": "JqbSy0uieU",
                    "keyDown": "V1HQUrwDwd"
                },
                "right": {
                    "keyUp": "aDAOF5H0iE",
                    "keyDown": "RyD3vCK8RZ"
                },
                "b": {
                    "keyUp": "",
                    "keyDown": "o1teHUEmu8",
                    "mobilePosition": {
                        "y": 62,
                        "x": 350
                    }
                },
                "h": {
                    "keyUp": "",
                    "keyDown": "hobBUTSbIr"
                }
            },
            "baseSpeed": 53,
            "price": {
                "playerAttributes": []
            },
            "skin": "https://s3-us-west-1.amazonaws.com/modd/halloween-0.18/spritesheet/man.png",
            "canBuyItem": true,
            "handle": "human",
            "name": "Human",
            "inventorySize": 1,
            "cellSheet": {
                "url": "https://modd.s3.amazonaws.com/asset/spriteImage/1582099904078_vx_chara02_c.png",
                "rowCount": 8,
                "columnCount": 12
            },
            "bodies": {
                "TX8R6XstID": {
                    "spriteScale": 1,
                    "fixtures": [
                        {
                            "shape": {
                                "type": "rectangle"
                            },
                            "restitution": 0,
                            "friction": 0.01,
                            "density": 2,
                            "isSensor": false
                        }
                    ],
                    "isFlying": false,
                    "fixedRotation": false,
                    "bullet": false,
                    "allowSleep": true,
                    "angularDamping": 1,
                    "linearDamping": 5,
                    "rotationSpeed": 2,
                    "type": "dynamic",
                    "height": 40,
                    "width": 40,
                    "collidesWith": {
                        "units": true,
                        "items": true,
                        "projectiles": true,
                        "walls": true,
                        "unit": true,
                        "item": true,
                        "debris": true
                    },
                    "z-index": {
                        "layer": 3,
                        "depth": 3
                    },
                    "name": "Human"
                }
            },
            "variables": {

            },
            "effects": {
                "bulletHit": {
                    "projectileType": "",
                    "sound": {

                    }
                },
                "create": {
                    "sound": {

                    },
                    "animation": ""
                },
                "destroy": {
                    "projectileType": "",
                    "sound": {

                    },
                    "animation": ""
                }
            }
        },
        "zombie_king": {
            "inventoryImage": "",
            "canBePurchasedBy": [],
            "isPurchasable": false,
            "states": {
                "zTzPFYOZkc": {
                    "name": "default",
                    "sound": {

                    },
                    "particles": {

                    },
                    "animation": "TpsmgGVfi5",
                    "body": "azvwdSVsbT"
                }
            },
            "particles": {
                "uEqQ4hrXbE": {
                    "name": "zombie blood",
                    "color": "#00bd1a",
                    "lifeBase": 300,
                    "quantityBase": 100,
                    "quantityTimespan": 300,
                    "deathOpacityBase": 0,
                    "mountPosition": {
                        "x": 0,
                        "y": 0
                    },
                    "velocityVector": {
                        "baseVector": {
                            "x": 0,
                            "y": 0
                        },
                        "minVector": {
                            "x": -0.3,
                            "y": -0.3
                        },
                        "maxVector": {
                            "x": 0.3,
                            "y": 0.3
                        }
                    }
                }
            },
            "sound": {
                "tDiOsacZQ7": {
                    "name": "Bullet hit",
                    "file": "https://modd.s3.amazonaws.com/asset/sound/1517558796613_bullet_hits_body2.mp3"
                }
            },
            "inventorySize": 1,
            "name": "Zombie King",
            "handle": "zombie_king",
            "canBuyItem": false,
            "skin": "https://s3-us-west-1.amazonaws.com/modd/halloween-0.18/spritesheet/zombie_king.png",
            "price": {
                "playerAttributes": []
            },
            "baseSpeed": 62,
            "abilities": {
                "z": {
                    "keyDown": "ztlkmxYxhS",
                    "keyUp": ""
                },
                "h": {
                    "keyDown": "hobBUTSbIr",
                    "keyUp": ""
                },
                "r": {
                    "keyDown": "sqm3Jypsek",
                    "keyUp": ""
                },
                "right": {
                    "keyDown": "RyD3vCK8RZ",
                    "keyUp": "aDAOF5H0iE"
                },
                "left": {
                    "keyDown": "V1HQUrwDwd",
                    "keyUp": "JqbSy0uieU"
                },
                "down": {
                    "keyDown": "VTf4AZmG4Z",
                    "keyUp": "IFcUtJ2d7h"
                },
                "up": {
                    "keyDown": "fmv89jlJH9",
                    "keyUp": "T76gPi4bt0"
                },
                "d": {
                    "keyDown": "RyD3vCK8RZ",
                    "keyUp": "aDAOF5H0iE"
                },
                "s": {
                    "keyDown": "VTf4AZmG4Z",
                    "keyUp": "IFcUtJ2d7h"
                },
                "a": {
                    "keyDown": "V1HQUrwDwd",
                    "keyUp": "JqbSy0uieU"
                },
                "w": {
                    "keyDown": "fmv89jlJH9",
                    "keyUp": "T76gPi4bt0"
                },
                "lookWheel": {
                    "mobilePosition": {
                        "x": 404,
                        "y": 173
                    }
                },
                "movementWheel": {
                    "mobilePosition": {
                        "x": 35,
                        "y": 175
                    }
                }
            },
            "attributes": {
                "B63bI7RmVw": {
                    "color": "white",
                    "showAsHUD": true,
                    "isVisible": false,
                    "regenerateSpeed": 0,
                    "value": 0,
                    "max": 1,
                    "min": -1,
                    "name": "movingDirectionY"
                },
                "v5JkWLylHp": {
                    "color": "white",
                    "showAsHUD": true,
                    "isVisible": false,
                    "regenerateSpeed": 0,
                    "value": 0,
                    "max": 1,
                    "min": -1,
                    "name": "movingDirectionX"
                },
                "XIBc1OnSZt": {
                    "displayValue": false,
                    "color": "#c3efe3",
                    "showAsHUD": true,
                    "isVisible": [],
                    "regenerateSpeed": 0,
                    "value": 155,
                    "max": 155,
                    "min": 155,
                    "name": "Speed"
                },
                "TpL30eN1aR": {
                    "decimalPlaces": 0,
                    "color": "white",
                    "showAsHUD": true,
                    "displayValue": false,
                    "isVisible": [],
                    "regenerateSpeed": 0,
                    "value": 0,
                    "dataType": "",
                    "max": 1000,
                    "min": 0,
                    "name": "Has killed"
                },
                "JNibtUdrRY": {
                    "decimalPlaces": 0,
                    "color": "white",
                    "showAsHUD": true,
                    "displayValue": false,
                    "isVisible": [],
                    "regenerateSpeed": 0,
                    "value": 5,
                    "dataType": "",
                    "max": 30,
                    "min": 0,
                    "name": "zCooldown"
                }
            },
            "spawnPosition": {
                "x": 1500,
                "y": 2000
            },
            "body": {
                "collidesWith": {
                    "debris": true,
                    "item": true,
                    "unit": true,
                    "walls": true,
                    "projectiles": true,
                    "items": true,
                    "units": true
                },
                "width": 40,
                "height": 40,
                "type": "dynamic",
                "rotationSpeed": 2,
                "linearDamping": 5,
                "angularDamping": 1,
                "allowSleep": true,
                "bullet": false,
                "fixedRotation": false,
                "isFlying": false,
                "fixtures": [
                    {
                        "density": 3,
                        "friction": 0.01,
                        "restitution": 0.01,
                        "shape": {
                            "type": "rectangle"
                        }
                    }
                ],
                "name": "Zombie King"
            },
            "effects": {
                "destroy": {
                    "animation": "",
                    "sound": {

                    },
                    "projectileType": ""
                },
                "create": {
                    "animation": "",
                    "sound": {

                    },
                    "projectileType": ""
                },
                "bulletHit": {
                    "particles": {

                    },
                    "sound": {

                    },
                    "projectileType": ""
                }
            },
            "animations": {
                "TpsmgGVfi5": {
                    "name": "default",
                    "frames": [
                        1
                    ],
                    "loopCount": 0,
                    "framesPerSecond": 0
                }
            },
            "cellSheet": {
                "url": "https://modd.s3.amazonaws.com/asset/spriteImage/1572797642335_redzombie.png",
                "rowCount": 1,
                "columnCount": 1
            },
            "bodies": {
                "azvwdSVsbT": {
                    "spriteScale": 1,
                    "z-index": {
                        "depth": 3,
                        "layer": 3
                    },
                    "collidesWith": {
                        "debris": true,
                        "item": true,
                        "unit": true,
                        "walls": true,
                        "projectiles": true,
                        "items": true,
                        "units": true
                    },
                    "width": 40,
                    "height": 40,
                    "type": "dynamic",
                    "rotationSpeed": 2,
                    "linearDamping": 5,
                    "angularDamping": 1,
                    "allowSleep": true,
                    "bullet": false,
                    "fixedRotation": false,
                    "isFlying": false,
                    "fixtures": [
                        {
                            "isSensor": false,
                            "density": "2.2",
                            "friction": 0.01,
                            "restitution": 0,
                            "shape": {
                                "type": "rectangle"
                            }
                        }
                    ],
                    "name": "Zombie King"
                }
            },
            "variables": {

            }
        },
        "zombie": {
            "inventoryImage": "",
            "cellSheet": {
                "columnCount": 1,
                "rowCount": 1,
                "url": "https://modd.s3.amazonaws.com/asset/spriteImage/1572797632867_zombie.png"
            },
            "animations": {
                "TpsmgGVfi5": {
                    "framesPerSecond": 0,
                    "loopCount": 0,
                    "frames": [
                        1
                    ],
                    "name": "default"
                }
            },
            "effects": {
                "bulletHit": {
                    "projectileType": "",
                    "sound": {

                    },
                    "particles": {

                    }
                },
                "create": {
                    "projectileType": "",
                    "sound": {

                    },
                    "animation": ""
                },
                "destroy": {
                    "projectileType": "",
                    "sound": {

                    },
                    "animation": ""
                }
            },
            "inventorySize": 1,
            "name": "Zombie",
            "handle": "zombie",
            "canBuyItem": false,
            "skin": "https://s3-us-west-1.amazonaws.com/modd/halloween-0.18/spritesheet/zombie.png",
            "price": {
                "playerAttributes": []
            },
            "baseSpeed": 54,
            "abilities": {
                "h": {
                    "keyDown": "hobBUTSbIr",
                    "keyUp": ""
                },
                "r": {
                    "keyDown": "sqm3Jypsek",
                    "keyUp": ""
                },
                "right": {
                    "keyDown": "RyD3vCK8RZ",
                    "keyUp": "aDAOF5H0iE"
                },
                "left": {
                    "keyDown": "V1HQUrwDwd",
                    "keyUp": "JqbSy0uieU"
                },
                "down": {
                    "keyDown": "VTf4AZmG4Z",
                    "keyUp": "IFcUtJ2d7h"
                },
                "up": {
                    "keyDown": "fmv89jlJH9",
                    "keyUp": "T76gPi4bt0"
                },
                "d": {
                    "keyDown": "RyD3vCK8RZ",
                    "keyUp": "aDAOF5H0iE"
                },
                "s": {
                    "keyDown": "VTf4AZmG4Z",
                    "keyUp": "IFcUtJ2d7h"
                },
                "a": {
                    "keyDown": "V1HQUrwDwd",
                    "keyUp": "JqbSy0uieU"
                },
                "w": {
                    "keyDown": "fmv89jlJH9",
                    "keyUp": "T76gPi4bt0"
                },
                "lookWheel": {
                    "mobilePosition": {
                        "x": 404,
                        "y": 170
                    }
                },
                "movementWheel": {
                    "mobilePosition": {
                        "x": 37,
                        "y": 169
                    }
                },
                "z": {
                    "keyUp": "",
                    "keyDown": "ztlkmxYxhS"
                }
            },
            "attributes": {
                "JNibtUdrRY": {
                    "decimalPlaces": 0,
                    "color": "white",
                    "showAsHUD": true,
                    "displayValue": false,
                    "isVisible": [],
                    "regenerateSpeed": 0,
                    "value": 5,
                    "dataType": "",
                    "max": 30,
                    "min": 0,
                    "name": "zCooldown"
                },
                "B63bI7RmVw": {
                    "color": "white",
                    "showAsHUD": true,
                    "isVisible": false,
                    "regenerateSpeed": 0,
                    "value": 0,
                    "max": 1,
                    "min": -1,
                    "name": "movingDirectionY"
                },
                "v5JkWLylHp": {
                    "color": "white",
                    "showAsHUD": true,
                    "isVisible": false,
                    "regenerateSpeed": 0,
                    "value": 0,
                    "max": 1,
                    "min": -1,
                    "name": "movingDirectionX"
                },
                "XIBc1OnSZt": {
                    "color": "#c3efe3",
                    "showAsHUD": true,
                    "isVisible": [],
                    "regenerateSpeed": 0,
                    "value": 140,
                    "max": 140,
                    "min": 140,
                    "name": "Speed",
                    "displayValue": false
                },
                "TpL30eN1aR": {
                    "name": "Has killed",
                    "min": 0,
                    "max": 1000,
                    "dataType": "",
                    "value": 0,
                    "regenerateSpeed": 0,
                    "isVisible": [],
                    "displayValue": false,
                    "showAsHUD": true,
                    "color": "white",
                    "decimalPlaces": 0
                }
            },
            "spawnPosition": {
                "x": 1500,
                "y": 2000
            },
            "body": {
                "collidesWith": {
                    "debris": true,
                    "item": true,
                    "unit": true,
                    "walls": true,
                    "projectiles": true,
                    "items": true,
                    "units": true
                },
                "width": 40,
                "height": 40,
                "type": "dynamic",
                "rotationSpeed": 2,
                "linearDamping": 5,
                "angularDamping": 1,
                "allowSleep": true,
                "bullet": false,
                "fixedRotation": false,
                "isFlying": false,
                "fixtures": [
                    {
                        "density": 3,
                        "friction": 0.01,
                        "restitution": 0.01,
                        "shape": {
                            "type": "rectangle"
                        }
                    }
                ],
                "name": "Zombie"
            },
            "sound": {
                "tDiOsacZQ7": {
                    "file": "https://modd.s3.amazonaws.com/asset/sound/1517558822835_bullet_hits_body1.mp3",
                    "name": "Bullet hit"
                }
            },
            "particles": {
                "uEqQ4hrXbE": {
                    "velocityVector": {
                        "maxVector": {
                            "y": 0.3,
                            "x": 0.3
                        },
                        "minVector": {
                            "y": -0.3,
                            "x": -0.3
                        },
                        "baseVector": {
                            "y": 0,
                            "x": 0
                        }
                    },
                    "mountPosition": {
                        "y": 0,
                        "x": 0
                    },
                    "deathOpacityBase": 0,
                    "quantityTimespan": 300,
                    "quantityBase": 100,
                    "lifeBase": 300,
                    "color": "#00bd1a",
                    "name": "zombie blood"
                }
            },
            "states": {
                "zTzPFYOZkc": {
                    "animation": "TpsmgGVfi5",
                    "particles": {

                    },
                    "sound": {

                    },
                    "name": "default",
                    "body": "tUCX1SyqgR"
                }
            },
            "bodies": {
                "tUCX1SyqgR": {
                    "spriteScale": 1,
                    "z-index": {
                        "depth": 3,
                        "layer": 3
                    },
                    "collidesWith": {
                        "debris": true,
                        "item": true,
                        "unit": true,
                        "walls": true,
                        "projectiles": true,
                        "items": true,
                        "units": true
                    },
                    "width": 40,
                    "height": 40,
                    "type": "dynamic",
                    "rotationSpeed": 2,
                    "linearDamping": 5,
                    "angularDamping": 1,
                    "allowSleep": true,
                    "bullet": false,
                    "fixedRotation": false,
                    "isFlying": false,
                    "fixtures": [
                        {
                            "isSensor": false,
                            "density": "1.2",
                            "friction": "0.01",
                            "restitution": 0,
                            "shape": {
                                "type": "rectangle"
                            }
                        }
                    ],
                    "name": "Zombie"
                }
            },
            "variables": {

            }
        },
        "sick": {
            "inventoryImage": "",
            "cellSheet": {
                "columnCount": 1,
                "rowCount": 1,
                "url": "https://modd.s3.amazonaws.com/asset/spriteImage/1574210961987_1.PNG"
            },
            "animations": {
                "TpsmgGVfi5": {
                    "framesPerSecond": 0,
                    "loopCount": 0,
                    "frames": [
                        1
                    ],
                    "name": "default"
                }
            },
            "inventorySize": 1,
            "inventorySlots": 4,
            "name": "Sick",
            "handle": "sick",
            "canBuyItem": false,
            "skin": "https://modd.s3.amazonaws.com/1500985036313_man_sick.png",
            "price": {
                "playerAttributes": []
            },
            "baseSpeed": 5,
            "abilities": {
                "h": {
                    "keyDown": "hobBUTSbIr",
                    "keyUp": ""
                },
                "right": {
                    "keyDown": "RyD3vCK8RZ",
                    "keyUp": "aDAOF5H0iE"
                },
                "left": {
                    "keyDown": "V1HQUrwDwd",
                    "keyUp": "JqbSy0uieU"
                },
                "down": {
                    "keyDown": "VTf4AZmG4Z",
                    "keyUp": "IFcUtJ2d7h"
                },
                "up": {
                    "keyDown": "fmv89jlJH9",
                    "keyUp": "T76gPi4bt0"
                },
                "d": {
                    "keyDown": "RyD3vCK8RZ",
                    "keyUp": "aDAOF5H0iE"
                },
                "s": {
                    "keyDown": "VTf4AZmG4Z",
                    "keyUp": "IFcUtJ2d7h"
                },
                "a": {
                    "keyDown": "V1HQUrwDwd",
                    "keyUp": "JqbSy0uieU"
                },
                "w": {
                    "keyDown": "fmv89jlJH9",
                    "keyUp": "T76gPi4bt0"
                },
                "lookWheel": {
                    "mobilePosition": {
                        "x": 407,
                        "y": 204
                    }
                },
                "movementWheel": {
                    "mobilePosition": {
                        "x": 35,
                        "y": 204
                    }
                }
            },
            "attributes": {
                "B63bI7RmVw": {
                    "color": "white",
                    "showAsHUD": true,
                    "isVisible": false,
                    "regenerateSpeed": 0,
                    "value": 0,
                    "max": 1,
                    "min": -1,
                    "name": "movingDirectionY"
                },
                "v5JkWLylHp": {
                    "color": "white",
                    "showAsHUD": true,
                    "isVisible": false,
                    "regenerateSpeed": 0,
                    "value": 0,
                    "max": 1,
                    "min": -1,
                    "name": "movingDirectionX"
                },
                "XIBc1OnSZt": {
                    "color": "#c3efe3",
                    "showAsHUD": true,
                    "isVisible": [],
                    "regenerateSpeed": 0,
                    "value": 15,
                    "max": 15,
                    "min": 15,
                    "name": "Speed",
                    "displayValue": false
                },
                "K2mih60v2P": {
                    "displayValue": false,
                    "keys": "K2mih60v2P",
                    "color": "#6bb9ce",
                    "isVisible": [],
                    "regenerateSpeed": "-0.2",
                    "value": "0",
                    "max": "100",
                    "min": 0,
                    "name": "Immunity"
                }
            },
            "spawnPosition": {
                "x": 1500,
                "y": 2000
            },
            "body": {
                "z-index": {
                    "debris": 3,
                    "layer": 3
                },
                "collidesWith": {
                    "debris": true,
                    "item": true,
                    "unit": true,
                    "walls": true,
                    "projectiles": true,
                    "items": true,
                    "units": true
                },
                "width": 40,
                "height": 40,
                "type": "dynamic",
                "rotationSpeed": 2,
                "linearDamping": 5,
                "angularDamping": 1,
                "allowSleep": true,
                "bullet": false,
                "fixedRotation": false,
                "isFlying": false,
                "fixtures": [
                    {
                        "density": 3,
                        "friction": 0.01,
                        "restitution": 0.01,
                        "shape": {
                            "type": "rectangle"
                        }
                    }
                ],
                "name": "Sick"
            },
            "sound": {
                "tDiOsacZQ7": {
                    "file": "https://modd.s3.amazonaws.com/asset/sound/1517558796613_bullet_hits_body2.mp3",
                    "name": "Bullet hit"
                },
                "fEhDyJ8knx": {
                    "file": "https://modd.s3.amazonaws.com/asset/sound/1517554551027_zombie_growl1.mp3",
                    "name": "Scream"
                }
            },
            "particles": {
                "uEqQ4hrXbE": {
                    "name": "zombie blood",
                    "color": "#00bd1a",
                    "lifeBase": 300,
                    "quantityBase": 100,
                    "quantityTimespan": 300,
                    "deathOpacityBase": 0,
                    "mountPosition": {
                        "x": 0,
                        "y": 0
                    },
                    "velocityVector": {
                        "baseVector": {
                            "x": 0,
                            "y": 0
                        },
                        "minVector": {
                            "x": -0.3,
                            "y": -0.3
                        },
                        "maxVector": {
                            "x": 0.3,
                            "y": 0.3
                        }
                    }
                }
            },
            "states": {
                "zTzPFYOZkc": {
                    "animation": "TpsmgGVfi5",
                    "particles": {

                    },
                    "sound": {

                    },
                    "name": "default",
                    "body": "SXqUbUqGWN"
                }
            },
            "isPurchasable": false,
            "canBePurchasedBy": [],
            "effects": {
                "destroy": {
                    "animation": "",
                    "sound": {

                    },
                    "projectileType": ""
                },
                "create": {
                    "animation": "",
                    "sound": {

                    },
                    "projectileType": ""
                },
                "bulletHit": {
                    "particles": {

                    },
                    "sound": {

                    },
                    "projectileType": ""
                }
            },
            "bodies": {
                "SXqUbUqGWN": {
                    "z-index": {
                        "debris": 3,
                        "layer": 3
                    },
                    "collidesWith": {
                        "debris": true,
                        "item": true,
                        "unit": true,
                        "walls": true,
                        "projectiles": true,
                        "items": true,
                        "units": true
                    },
                    "width": 40,
                    "height": 40,
                    "type": "dynamic",
                    "rotationSpeed": 2,
                    "linearDamping": 5,
                    "angularDamping": 1,
                    "allowSleep": true,
                    "bullet": false,
                    "fixedRotation": false,
                    "isFlying": false,
                    "fixtures": [
                        {
                            "density": 3,
                            "friction": 0.01,
                            "restitution": 0.01,
                            "shape": {
                                "type": "rectangle"
                            },
                            "isSensor": false
                        }
                    ],
                    "name": "Sick",
                    "spriteScale": 1
                }
            },
            "variables": {

            }
        }
    },
    "scripts": {
        "x1BdqADOyD": {
            "order": 1,
            "key": "x1BdqADOyD",
            "parent": "yNLTQxb2xL",
            "name": "when bullet hits (stronger potato)",
            "actions": [
                {
                    "vars": [
                        {
                            "source": "trigger",
                            "id": "getTriggeringProjectile"
                        },
                        {
                            "source": "trigger",
                            "id": "getTriggeringDebris"
                        },
                        {
                            "source": "trigger",
                            "id": "getLastTouchedProjectile"
                        },
                        {
                            "source": "trigger",
                            "id": "getTriggeringProjectile"
                        },
                        {
                            "source": "trigger",
                            "id": "getTriggeringUnit"
                        },
                        {
                            "source": "trigger",
                            "id": "getLastTouchingUnit"
                        },
                        {
                            "source": "trigger",
                            "id": "getTriggeringProjectile"
                        }
                    ],
                    "type": "condition",
                    "conditions": [
                        {
                            "operandType": "projectileType",
                            "operator": "=="
                        },
                        {
                            "vars": [
                                {
                                    "source": "trigger",
                                    "id": "getTriggeringProjectile"
                                },
                                {
                                    "source": "trigger",
                                    "id": "getTriggeringDebris"
                                },
                                {
                                    "source": "trigger",
                                    "id": "getLastTouchedProjectile"
                                },
                                {
                                    "source": "trigger",
                                    "id": "getTriggeringProjectile"
                                },
                                {
                                    "source": "trigger",
                                    "id": "getTriggeringUnit"
                                },
                                {
                                    "source": "trigger",
                                    "id": "getLastTouchingUnit"
                                },
                                {
                                    "source": "trigger",
                                    "id": "getTriggeringProjectile"
                                }
                            ],
                            "function": "getProjectileTypeOfProjectile",
                            "entity": {
                                "vars": [
                                    {
                                        "source": "trigger",
                                        "id": "getTriggeringProjectile"
                                    },
                                    {
                                        "source": "trigger",
                                        "id": "getTriggeringDebris"
                                    },
                                    {
                                        "source": "trigger",
                                        "id": "getLastTouchedProjectile"
                                    },
                                    {
                                        "source": "trigger",
                                        "id": "getTriggeringProjectile"
                                    },
                                    {
                                        "source": "trigger",
                                        "id": "getTriggeringUnit"
                                    },
                                    {
                                        "source": "trigger",
                                        "id": "getLastTouchingUnit"
                                    },
                                    {
                                        "source": "trigger",
                                        "id": "getTriggeringProjectile"
                                    }
                                ],
                                "function": "getTriggeringProjectile"
                            }
                        },
                        "potato"
                    ],
                    "then": [
                        {
                            "vars": [
                                {
                                    "source": "trigger",
                                    "id": "getTriggeringProjectile"
                                },
                                {
                                    "source": "trigger",
                                    "id": "getTriggeringDebris"
                                },
                                {
                                    "source": "trigger",
                                    "id": "getLastTouchedProjectile"
                                },
                                {
                                    "source": "trigger",
                                    "id": "getTriggeringProjectile"
                                },
                                {
                                    "source": "trigger",
                                    "id": "getTriggeringUnit"
                                },
                                {
                                    "source": "trigger",
                                    "id": "getLastTouchingUnit"
                                },
                                {
                                    "source": "trigger",
                                    "id": "getTriggeringProjectile"
                                }
                            ],
                            "actions": [
                                {
                                    "vars": [
                                        {
                                            "source": "trigger",
                                            "id": "getTriggeringProjectile"
                                        },
                                        {
                                            "source": "trigger",
                                            "id": "getTriggeringDebris"
                                        },
                                        {
                                            "source": "trigger",
                                            "id": "getLastTouchedProjectile"
                                        },
                                        {
                                            "source": "trigger",
                                            "id": "getTriggeringProjectile"
                                        },
                                        {
                                            "source": "trigger",
                                            "id": "getTriggeringUnit"
                                        },
                                        {
                                            "source": "trigger",
                                            "id": "getLastTouchingUnit"
                                        },
                                        {
                                            "source": "trigger",
                                            "id": "getTriggeringProjectile"
                                        }
                                    ],
                                    "type": "applyForceOnEntityAngle",
                                    "force": 500,
                                    "entity": {
                                        "vars": [
                                            {
                                                "source": "trigger",
                                                "id": "getTriggeringProjectile"
                                            },
                                            {
                                                "source": "trigger",
                                                "id": "getTriggeringDebris"
                                            },
                                            {
                                                "source": "trigger",
                                                "id": "getLastTouchedProjectile"
                                            },
                                            {
                                                "source": "trigger",
                                                "id": "getTriggeringProjectile"
                                            },
                                            {
                                                "source": "trigger",
                                                "id": "getTriggeringUnit"
                                            },
                                            {
                                                "source": "trigger",
                                                "id": "getLastTouchingUnit"
                                            },
                                            {
                                                "source": "trigger",
                                                "id": "getTriggeringProjectile"
                                            }
                                        ],
                                        "function": "getTriggeringUnit"
                                    },
                                    "angle": {
                                        "vars": [
                                            {
                                                "source": "trigger",
                                                "id": "getTriggeringProjectile"
                                            },
                                            {
                                                "source": "trigger",
                                                "id": "getTriggeringDebris"
                                            },
                                            {
                                                "source": "trigger",
                                                "id": "getLastTouchedProjectile"
                                            },
                                            {
                                                "source": "trigger",
                                                "id": "getTriggeringProjectile"
                                            },
                                            {
                                                "source": "trigger",
                                                "id": "getTriggeringUnit"
                                            },
                                            {
                                                "source": "trigger",
                                                "id": "getLastTouchingUnit"
                                            },
                                            {
                                                "source": "trigger",
                                                "id": "getTriggeringProjectile"
                                            }
                                        ],
                                        "positionB": {
                                            "vars": [
                                                {
                                                    "source": "trigger",
                                                    "id": "getTriggeringProjectile"
                                                },
                                                {
                                                    "source": "trigger",
                                                    "id": "getTriggeringDebris"
                                                },
                                                {
                                                    "source": "trigger",
                                                    "id": "getLastTouchedProjectile"
                                                },
                                                {
                                                    "source": "trigger",
                                                    "id": "getTriggeringProjectile"
                                                },
                                                {
                                                    "source": "trigger",
                                                    "id": "getTriggeringUnit"
                                                },
                                                {
                                                    "source": "trigger",
                                                    "id": "getLastTouchingUnit"
                                                },
                                                {
                                                    "source": "trigger",
                                                    "id": "getTriggeringProjectile"
                                                }
                                            ],
                                            "entity": {
                                                "vars": [
                                                    {
                                                        "source": "trigger",
                                                        "id": "getTriggeringProjectile"
                                                    },
                                                    {
                                                        "source": "trigger",
                                                        "id": "getTriggeringDebris"
                                                    },
                                                    {
                                                        "source": "trigger",
                                                        "id": "getLastTouchedProjectile"
                                                    },
                                                    {
                                                        "source": "trigger",
                                                        "id": "getTriggeringProjectile"
                                                    },
                                                    {
                                                        "source": "trigger",
                                                        "id": "getTriggeringUnit"
                                                    },
                                                    {
                                                        "source": "trigger",
                                                        "id": "getLastTouchingUnit"
                                                    },
                                                    {
                                                        "source": "trigger",
                                                        "id": "getTriggeringProjectile"
                                                    }
                                                ],
                                                "function": "getTriggeringUnit"
                                            },
                                            "function": "getEntityPosition",
                                            "unit": {
                                                "function": "selectedUnit"
                                            }
                                        },
                                        "positionA": {
                                            "vars": [
                                                {
                                                    "source": "trigger",
                                                    "id": "getTriggeringProjectile"
                                                },
                                                {
                                                    "source": "trigger",
                                                    "id": "getTriggeringDebris"
                                                },
                                                {
                                                    "source": "trigger",
                                                    "id": "getLastTouchedProjectile"
                                                },
                                                {
                                                    "source": "trigger",
                                                    "id": "getTriggeringProjectile"
                                                },
                                                {
                                                    "source": "trigger",
                                                    "id": "getTriggeringUnit"
                                                },
                                                {
                                                    "source": "trigger",
                                                    "id": "getLastTouchingUnit"
                                                },
                                                {
                                                    "source": "trigger",
                                                    "id": "getTriggeringProjectile"
                                                }
                                            ],
                                            "entity": {
                                                "vars": [
                                                    {
                                                        "source": "trigger",
                                                        "id": "getTriggeringProjectile"
                                                    },
                                                    {
                                                        "source": "trigger",
                                                        "id": "getTriggeringDebris"
                                                    },
                                                    {
                                                        "source": "trigger",
                                                        "id": "getLastTouchedProjectile"
                                                    },
                                                    {
                                                        "source": "trigger",
                                                        "id": "getTriggeringProjectile"
                                                    },
                                                    {
                                                        "source": "trigger",
                                                        "id": "getTriggeringUnit"
                                                    },
                                                    {
                                                        "source": "trigger",
                                                        "id": "getLastTouchingUnit"
                                                    },
                                                    {
                                                        "source": "trigger",
                                                        "id": "getTriggeringProjectile"
                                                    }
                                                ],
                                                "function": "getSourceUnitOfProjectile",
                                                "entity": {
                                                    "vars": [
                                                        {
                                                            "source": "trigger",
                                                            "id": "getTriggeringProjectile"
                                                        },
                                                        {
                                                            "source": "trigger",
                                                            "id": "getTriggeringDebris"
                                                        },
                                                        {
                                                            "source": "trigger",
                                                            "id": "getLastTouchedProjectile"
                                                        },
                                                        {
                                                            "source": "trigger",
                                                            "id": "getTriggeringProjectile"
                                                        },
                                                        {
                                                            "source": "trigger",
                                                            "id": "getTriggeringUnit"
                                                        },
                                                        {
                                                            "source": "trigger",
                                                            "id": "getLastTouchingUnit"
                                                        },
                                                        {
                                                            "source": "trigger",
                                                            "id": "getTriggeringProjectile"
                                                        }
                                                    ],
                                                    "function": "getTriggeringProjectile"
                                                }
                                            },
                                            "function": "getEntityPosition",
                                            "unit": {
                                                "function": "selectedUnit"
                                            }
                                        },
                                        "function": "angleBetweenPositions"
                                    }
                                }
                            ],
                            "stop": 6,
                            "start": 1,
                            "variableName": "i",
                            "type": "for",
                            "disabled": false
                        },
                        {
                            "vars": [
                                {
                                    "source": "trigger",
                                    "id": "getTriggeringProjectile"
                                },
                                {
                                    "source": "trigger",
                                    "id": "getTriggeringDebris"
                                },
                                {
                                    "source": "trigger",
                                    "id": "getLastTouchedProjectile"
                                },
                                {
                                    "source": "trigger",
                                    "id": "getTriggeringProjectile"
                                },
                                {
                                    "source": "trigger",
                                    "id": "getTriggeringUnit"
                                },
                                {
                                    "source": "trigger",
                                    "id": "getLastTouchingUnit"
                                },
                                {
                                    "source": "trigger",
                                    "id": "getTriggeringProjectile"
                                }
                            ],
                            "disabled": false,
                            "type": "for",
                            "variableName": "i",
                            "start": 1,
                            "stop": 5,
                            "actions": [
                                {
                                    "vars": [
                                        {
                                            "source": "trigger",
                                            "id": "getTriggeringProjectile"
                                        },
                                        {
                                            "source": "trigger",
                                            "id": "getTriggeringDebris"
                                        },
                                        {
                                            "source": "trigger",
                                            "id": "getLastTouchedProjectile"
                                        },
                                        {
                                            "source": "trigger",
                                            "id": "getTriggeringProjectile"
                                        },
                                        {
                                            "source": "trigger",
                                            "id": "getTriggeringUnit"
                                        },
                                        {
                                            "source": "trigger",
                                            "id": "getLastTouchingUnit"
                                        },
                                        {
                                            "source": "trigger",
                                            "id": "getTriggeringProjectile"
                                        }
                                    ],
                                    "type": "applyForceOnEntityAngle",
                                    "force": 500,
                                    "entity": {
                                        "vars": [
                                            {
                                                "source": "trigger",
                                                "id": "getTriggeringProjectile"
                                            },
                                            {
                                                "source": "trigger",
                                                "id": "getTriggeringDebris"
                                            },
                                            {
                                                "source": "trigger",
                                                "id": "getLastTouchedProjectile"
                                            },
                                            {
                                                "source": "trigger",
                                                "id": "getTriggeringProjectile"
                                            },
                                            {
                                                "source": "trigger",
                                                "id": "getTriggeringUnit"
                                            },
                                            {
                                                "source": "trigger",
                                                "id": "getLastTouchingUnit"
                                            },
                                            {
                                                "source": "trigger",
                                                "id": "getTriggeringProjectile"
                                            }
                                        ],
                                        "function": "getTriggeringDebris"
                                    },
                                    "angle": {
                                        "vars": [
                                            {
                                                "source": "trigger",
                                                "id": "getTriggeringProjectile"
                                            },
                                            {
                                                "source": "trigger",
                                                "id": "getTriggeringDebris"
                                            },
                                            {
                                                "source": "trigger",
                                                "id": "getLastTouchedProjectile"
                                            },
                                            {
                                                "source": "trigger",
                                                "id": "getTriggeringProjectile"
                                            },
                                            {
                                                "source": "trigger",
                                                "id": "getTriggeringUnit"
                                            },
                                            {
                                                "source": "trigger",
                                                "id": "getLastTouchingUnit"
                                            },
                                            {
                                                "source": "trigger",
                                                "id": "getTriggeringProjectile"
                                            }
                                        ],
                                        "positionB": {
                                            "vars": [
                                                {
                                                    "source": "trigger",
                                                    "id": "getTriggeringProjectile"
                                                },
                                                {
                                                    "source": "trigger",
                                                    "id": "getTriggeringDebris"
                                                },
                                                {
                                                    "source": "trigger",
                                                    "id": "getLastTouchedProjectile"
                                                },
                                                {
                                                    "source": "trigger",
                                                    "id": "getTriggeringProjectile"
                                                },
                                                {
                                                    "source": "trigger",
                                                    "id": "getTriggeringUnit"
                                                },
                                                {
                                                    "source": "trigger",
                                                    "id": "getLastTouchingUnit"
                                                },
                                                {
                                                    "source": "trigger",
                                                    "id": "getTriggeringProjectile"
                                                }
                                            ],
                                            "entity": {
                                                "vars": [
                                                    {
                                                        "source": "trigger",
                                                        "id": "getTriggeringProjectile"
                                                    },
                                                    {
                                                        "source": "trigger",
                                                        "id": "getTriggeringDebris"
                                                    },
                                                    {
                                                        "source": "trigger",
                                                        "id": "getLastTouchedProjectile"
                                                    },
                                                    {
                                                        "source": "trigger",
                                                        "id": "getTriggeringProjectile"
                                                    },
                                                    {
                                                        "source": "trigger",
                                                        "id": "getTriggeringUnit"
                                                    },
                                                    {
                                                        "source": "trigger",
                                                        "id": "getLastTouchingUnit"
                                                    },
                                                    {
                                                        "source": "trigger",
                                                        "id": "getTriggeringProjectile"
                                                    }
                                                ],
                                                "function": "getTriggeringDebris"
                                            },
                                            "function": "getEntityPosition",
                                            "unit": {
                                                "function": "selectedUnit"
                                            }
                                        },
                                        "positionA": {
                                            "vars": [
                                                {
                                                    "source": "trigger",
                                                    "id": "getTriggeringProjectile"
                                                },
                                                {
                                                    "source": "trigger",
                                                    "id": "getTriggeringDebris"
                                                },
                                                {
                                                    "source": "trigger",
                                                    "id": "getLastTouchedProjectile"
                                                },
                                                {
                                                    "source": "trigger",
                                                    "id": "getTriggeringProjectile"
                                                },
                                                {
                                                    "source": "trigger",
                                                    "id": "getTriggeringUnit"
                                                },
                                                {
                                                    "source": "trigger",
                                                    "id": "getLastTouchingUnit"
                                                },
                                                {
                                                    "source": "trigger",
                                                    "id": "getTriggeringProjectile"
                                                }
                                            ],
                                            "entity": {
                                                "vars": [
                                                    {
                                                        "source": "trigger",
                                                        "id": "getTriggeringProjectile"
                                                    },
                                                    {
                                                        "source": "trigger",
                                                        "id": "getTriggeringDebris"
                                                    },
                                                    {
                                                        "source": "trigger",
                                                        "id": "getLastTouchedProjectile"
                                                    },
                                                    {
                                                        "source": "trigger",
                                                        "id": "getTriggeringProjectile"
                                                    },
                                                    {
                                                        "source": "trigger",
                                                        "id": "getTriggeringUnit"
                                                    },
                                                    {
                                                        "source": "trigger",
                                                        "id": "getLastTouchingUnit"
                                                    },
                                                    {
                                                        "source": "trigger",
                                                        "id": "getTriggeringProjectile"
                                                    }
                                                ],
                                                "function": "getSourceUnitOfProjectile",
                                                "entity": {
                                                    "vars": [
                                                        {
                                                            "source": "trigger",
                                                            "id": "getTriggeringProjectile"
                                                        },
                                                        {
                                                            "source": "trigger",
                                                            "id": "getTriggeringDebris"
                                                        },
                                                        {
                                                            "source": "trigger",
                                                            "id": "getLastTouchedProjectile"
                                                        },
                                                        {
                                                            "source": "trigger",
                                                            "id": "getTriggeringProjectile"
                                                        },
                                                        {
                                                            "source": "trigger",
                                                            "id": "getTriggeringUnit"
                                                        },
                                                        {
                                                            "source": "trigger",
                                                            "id": "getLastTouchingUnit"
                                                        },
                                                        {
                                                            "source": "trigger",
                                                            "id": "getTriggeringProjectile"
                                                        }
                                                    ],
                                                    "function": "getTriggeringProjectile"
                                                }
                                            },
                                            "function": "getEntityPosition",
                                            "unit": {
                                                "function": "selectedUnit"
                                            }
                                        },
                                        "function": "angleBetweenPositions"
                                    }
                                }
                            ]
                        }
                    ],
                    "else": []
                },
                {
                    "vars": [
                        {
                            "source": "trigger",
                            "id": "getTriggeringProjectile"
                        },
                        {
                            "source": "trigger",
                            "id": "getTriggeringDebris"
                        },
                        {
                            "source": "trigger",
                            "id": "getLastTouchedProjectile"
                        },
                        {
                            "source": "trigger",
                            "id": "getTriggeringProjectile"
                        },
                        {
                            "source": "trigger",
                            "id": "getTriggeringUnit"
                        },
                        {
                            "source": "trigger",
                            "id": "getLastTouchingUnit"
                        },
                        {
                            "source": "trigger",
                            "id": "getTriggeringProjectile"
                        }
                    ],
                    "type": "condition",
                    "conditions": [
                        {
                            "operandType": "projectileType",
                            "operator": "=="
                        },
                        {
                            "vars": [
                                {
                                    "source": "trigger",
                                    "id": "getTriggeringProjectile"
                                },
                                {
                                    "source": "trigger",
                                    "id": "getTriggeringDebris"
                                },
                                {
                                    "source": "trigger",
                                    "id": "getLastTouchedProjectile"
                                },
                                {
                                    "source": "trigger",
                                    "id": "getTriggeringProjectile"
                                },
                                {
                                    "source": "trigger",
                                    "id": "getTriggeringUnit"
                                },
                                {
                                    "source": "trigger",
                                    "id": "getLastTouchingUnit"
                                },
                                {
                                    "source": "trigger",
                                    "id": "getTriggeringProjectile"
                                }
                            ],
                            "function": "getProjectileTypeOfProjectile",
                            "entity": {
                                "vars": [
                                    {
                                        "source": "trigger",
                                        "id": "getTriggeringProjectile"
                                    },
                                    {
                                        "source": "trigger",
                                        "id": "getTriggeringDebris"
                                    },
                                    {
                                        "source": "trigger",
                                        "id": "getLastTouchedProjectile"
                                    },
                                    {
                                        "source": "trigger",
                                        "id": "getTriggeringProjectile"
                                    },
                                    {
                                        "source": "trigger",
                                        "id": "getTriggeringUnit"
                                    },
                                    {
                                        "source": "trigger",
                                        "id": "getLastTouchingUnit"
                                    },
                                    {
                                        "source": "trigger",
                                        "id": "getTriggeringProjectile"
                                    }
                                ],
                                "function": "getTriggeringProjectile"
                            }
                        },
                        "lpUqGiiq1R"
                    ],
                    "then": [
                        {
                            "vars": [
                                {
                                    "source": "trigger",
                                    "id": "getTriggeringProjectile"
                                },
                                {
                                    "source": "trigger",
                                    "id": "getTriggeringDebris"
                                },
                                {
                                    "source": "trigger",
                                    "id": "getLastTouchedProjectile"
                                },
                                {
                                    "source": "trigger",
                                    "id": "getTriggeringProjectile"
                                },
                                {
                                    "source": "trigger",
                                    "id": "getTriggeringUnit"
                                },
                                {
                                    "source": "trigger",
                                    "id": "getLastTouchingUnit"
                                },
                                {
                                    "source": "trigger",
                                    "id": "getTriggeringProjectile"
                                }
                            ],
                            "actions": [
                                {
                                    "vars": [
                                        {
                                            "source": "trigger",
                                            "id": "getTriggeringProjectile"
                                        },
                                        {
                                            "source": "trigger",
                                            "id": "getTriggeringDebris"
                                        },
                                        {
                                            "source": "trigger",
                                            "id": "getLastTouchedProjectile"
                                        },
                                        {
                                            "source": "trigger",
                                            "id": "getTriggeringProjectile"
                                        },
                                        {
                                            "source": "trigger",
                                            "id": "getTriggeringUnit"
                                        },
                                        {
                                            "source": "trigger",
                                            "id": "getLastTouchingUnit"
                                        },
                                        {
                                            "source": "trigger",
                                            "id": "getTriggeringProjectile"
                                        }
                                    ],
                                    "type": "applyForceOnEntityAngle",
                                    "force": 500,
                                    "entity": {
                                        "vars": [
                                            {
                                                "source": "trigger",
                                                "id": "getTriggeringProjectile"
                                            },
                                            {
                                                "source": "trigger",
                                                "id": "getTriggeringDebris"
                                            },
                                            {
                                                "source": "trigger",
                                                "id": "getLastTouchedProjectile"
                                            },
                                            {
                                                "source": "trigger",
                                                "id": "getTriggeringProjectile"
                                            },
                                            {
                                                "source": "trigger",
                                                "id": "getTriggeringUnit"
                                            },
                                            {
                                                "source": "trigger",
                                                "id": "getLastTouchingUnit"
                                            },
                                            {
                                                "source": "trigger",
                                                "id": "getTriggeringProjectile"
                                            }
                                        ],
                                        "function": "getTriggeringUnit"
                                    },
                                    "angle": {
                                        "vars": [
                                            {
                                                "source": "trigger",
                                                "id": "getTriggeringProjectile"
                                            },
                                            {
                                                "source": "trigger",
                                                "id": "getTriggeringDebris"
                                            },
                                            {
                                                "source": "trigger",
                                                "id": "getLastTouchedProjectile"
                                            },
                                            {
                                                "source": "trigger",
                                                "id": "getTriggeringProjectile"
                                            },
                                            {
                                                "source": "trigger",
                                                "id": "getTriggeringUnit"
                                            },
                                            {
                                                "source": "trigger",
                                                "id": "getLastTouchingUnit"
                                            },
                                            {
                                                "source": "trigger",
                                                "id": "getTriggeringProjectile"
                                            }
                                        ],
                                        "positionB": {
                                            "vars": [
                                                {
                                                    "source": "trigger",
                                                    "id": "getTriggeringProjectile"
                                                },
                                                {
                                                    "source": "trigger",
                                                    "id": "getTriggeringDebris"
                                                },
                                                {
                                                    "source": "trigger",
                                                    "id": "getLastTouchedProjectile"
                                                },
                                                {
                                                    "source": "trigger",
                                                    "id": "getTriggeringProjectile"
                                                },
                                                {
                                                    "source": "trigger",
                                                    "id": "getTriggeringUnit"
                                                },
                                                {
                                                    "source": "trigger",
                                                    "id": "getLastTouchingUnit"
                                                },
                                                {
                                                    "source": "trigger",
                                                    "id": "getTriggeringProjectile"
                                                }
                                            ],
                                            "entity": {
                                                "vars": [
                                                    {
                                                        "source": "trigger",
                                                        "id": "getTriggeringProjectile"
                                                    },
                                                    {
                                                        "source": "trigger",
                                                        "id": "getTriggeringDebris"
                                                    },
                                                    {
                                                        "source": "trigger",
                                                        "id": "getLastTouchedProjectile"
                                                    },
                                                    {
                                                        "source": "trigger",
                                                        "id": "getTriggeringProjectile"
                                                    },
                                                    {
                                                        "source": "trigger",
                                                        "id": "getTriggeringUnit"
                                                    },
                                                    {
                                                        "source": "trigger",
                                                        "id": "getLastTouchingUnit"
                                                    },
                                                    {
                                                        "source": "trigger",
                                                        "id": "getTriggeringProjectile"
                                                    }
                                                ],
                                                "function": "getTriggeringUnit"
                                            },
                                            "function": "getEntityPosition",
                                            "unit": {
                                                "function": "selectedUnit"
                                            }
                                        },
                                        "positionA": {
                                            "vars": [
                                                {
                                                    "source": "trigger",
                                                    "id": "getTriggeringProjectile"
                                                },
                                                {
                                                    "source": "trigger",
                                                    "id": "getTriggeringDebris"
                                                },
                                                {
                                                    "source": "trigger",
                                                    "id": "getLastTouchedProjectile"
                                                },
                                                {
                                                    "source": "trigger",
                                                    "id": "getTriggeringProjectile"
                                                },
                                                {
                                                    "source": "trigger",
                                                    "id": "getTriggeringUnit"
                                                },
                                                {
                                                    "source": "trigger",
                                                    "id": "getLastTouchingUnit"
                                                },
                                                {
                                                    "source": "trigger",
                                                    "id": "getTriggeringProjectile"
                                                }
                                            ],
                                            "entity": {
                                                "vars": [
                                                    {
                                                        "source": "trigger",
                                                        "id": "getTriggeringProjectile"
                                                    },
                                                    {
                                                        "source": "trigger",
                                                        "id": "getTriggeringDebris"
                                                    },
                                                    {
                                                        "source": "trigger",
                                                        "id": "getLastTouchedProjectile"
                                                    },
                                                    {
                                                        "source": "trigger",
                                                        "id": "getTriggeringProjectile"
                                                    },
                                                    {
                                                        "source": "trigger",
                                                        "id": "getTriggeringUnit"
                                                    },
                                                    {
                                                        "source": "trigger",
                                                        "id": "getLastTouchingUnit"
                                                    },
                                                    {
                                                        "source": "trigger",
                                                        "id": "getTriggeringProjectile"
                                                    }
                                                ],
                                                "function": "getSourceUnitOfProjectile",
                                                "entity": {
                                                    "vars": [
                                                        {
                                                            "source": "trigger",
                                                            "id": "getTriggeringProjectile"
                                                        },
                                                        {
                                                            "source": "trigger",
                                                            "id": "getTriggeringDebris"
                                                        },
                                                        {
                                                            "source": "trigger",
                                                            "id": "getLastTouchedProjectile"
                                                        },
                                                        {
                                                            "source": "trigger",
                                                            "id": "getTriggeringProjectile"
                                                        },
                                                        {
                                                            "source": "trigger",
                                                            "id": "getTriggeringUnit"
                                                        },
                                                        {
                                                            "source": "trigger",
                                                            "id": "getLastTouchingUnit"
                                                        },
                                                        {
                                                            "source": "trigger",
                                                            "id": "getTriggeringProjectile"
                                                        }
                                                    ],
                                                    "function": "getTriggeringProjectile"
                                                }
                                            },
                                            "function": "getEntityPosition",
                                            "unit": {
                                                "function": "selectedUnit"
                                            }
                                        },
                                        "function": "angleBetweenPositions"
                                    }
                                }
                            ],
                            "stop": 5,
                            "start": 1,
                            "variableName": "i",
                            "type": "for",
                            "disabled": false
                        },
                        {
                            "vars": [
                                {
                                    "source": "trigger",
                                    "id": "getTriggeringProjectile"
                                },
                                {
                                    "source": "trigger",
                                    "id": "getTriggeringDebris"
                                },
                                {
                                    "source": "trigger",
                                    "id": "getLastTouchedProjectile"
                                },
                                {
                                    "source": "trigger",
                                    "id": "getTriggeringProjectile"
                                },
                                {
                                    "source": "trigger",
                                    "id": "getTriggeringUnit"
                                },
                                {
                                    "source": "trigger",
                                    "id": "getLastTouchingUnit"
                                },
                                {
                                    "source": "trigger",
                                    "id": "getTriggeringProjectile"
                                }
                            ],
                            "disabled": false,
                            "type": "for",
                            "variableName": "i",
                            "start": 1,
                            "stop": 2,
                            "actions": [
                                {
                                    "vars": [
                                        {
                                            "source": "trigger",
                                            "id": "getTriggeringProjectile"
                                        },
                                        {
                                            "source": "trigger",
                                            "id": "getTriggeringDebris"
                                        },
                                        {
                                            "source": "trigger",
                                            "id": "getLastTouchedProjectile"
                                        },
                                        {
                                            "source": "trigger",
                                            "id": "getTriggeringProjectile"
                                        },
                                        {
                                            "source": "trigger",
                                            "id": "getTriggeringUnit"
                                        },
                                        {
                                            "source": "trigger",
                                            "id": "getLastTouchingUnit"
                                        },
                                        {
                                            "source": "trigger",
                                            "id": "getTriggeringProjectile"
                                        }
                                    ],
                                    "type": "applyForceOnEntityAngle",
                                    "force": 500,
                                    "entity": {
                                        "vars": [
                                            {
                                                "source": "trigger",
                                                "id": "getTriggeringProjectile"
                                            },
                                            {
                                                "source": "trigger",
                                                "id": "getTriggeringDebris"
                                            },
                                            {
                                                "source": "trigger",
                                                "id": "getLastTouchedProjectile"
                                            },
                                            {
                                                "source": "trigger",
                                                "id": "getTriggeringProjectile"
                                            },
                                            {
                                                "source": "trigger",
                                                "id": "getTriggeringUnit"
                                            },
                                            {
                                                "source": "trigger",
                                                "id": "getLastTouchingUnit"
                                            },
                                            {
                                                "source": "trigger",
                                                "id": "getTriggeringProjectile"
                                            }
                                        ],
                                        "function": "getTriggeringDebris"
                                    },
                                    "angle": {
                                        "vars": [
                                            {
                                                "source": "trigger",
                                                "id": "getTriggeringProjectile"
                                            },
                                            {
                                                "source": "trigger",
                                                "id": "getTriggeringDebris"
                                            },
                                            {
                                                "source": "trigger",
                                                "id": "getLastTouchedProjectile"
                                            },
                                            {
                                                "source": "trigger",
                                                "id": "getTriggeringProjectile"
                                            },
                                            {
                                                "source": "trigger",
                                                "id": "getTriggeringUnit"
                                            },
                                            {
                                                "source": "trigger",
                                                "id": "getLastTouchingUnit"
                                            },
                                            {
                                                "source": "trigger",
                                                "id": "getTriggeringProjectile"
                                            }
                                        ],
                                        "positionB": {
                                            "vars": [
                                                {
                                                    "source": "trigger",
                                                    "id": "getTriggeringProjectile"
                                                },
                                                {
                                                    "source": "trigger",
                                                    "id": "getTriggeringDebris"
                                                },
                                                {
                                                    "source": "trigger",
                                                    "id": "getLastTouchedProjectile"
                                                },
                                                {
                                                    "source": "trigger",
                                                    "id": "getTriggeringProjectile"
                                                },
                                                {
                                                    "source": "trigger",
                                                    "id": "getTriggeringUnit"
                                                },
                                                {
                                                    "source": "trigger",
                                                    "id": "getLastTouchingUnit"
                                                },
                                                {
                                                    "source": "trigger",
                                                    "id": "getTriggeringProjectile"
                                                }
                                            ],
                                            "entity": {
                                                "vars": [
                                                    {
                                                        "source": "trigger",
                                                        "id": "getTriggeringProjectile"
                                                    },
                                                    {
                                                        "source": "trigger",
                                                        "id": "getTriggeringDebris"
                                                    },
                                                    {
                                                        "source": "trigger",
                                                        "id": "getLastTouchedProjectile"
                                                    },
                                                    {
                                                        "source": "trigger",
                                                        "id": "getTriggeringProjectile"
                                                    },
                                                    {
                                                        "source": "trigger",
                                                        "id": "getTriggeringUnit"
                                                    },
                                                    {
                                                        "source": "trigger",
                                                        "id": "getLastTouchingUnit"
                                                    },
                                                    {
                                                        "source": "trigger",
                                                        "id": "getTriggeringProjectile"
                                                    }
                                                ],
                                                "function": "getTriggeringDebris"
                                            },
                                            "function": "getEntityPosition",
                                            "unit": {
                                                "function": "selectedUnit"
                                            }
                                        },
                                        "positionA": {
                                            "vars": [
                                                {
                                                    "source": "trigger",
                                                    "id": "getTriggeringProjectile"
                                                },
                                                {
                                                    "source": "trigger",
                                                    "id": "getTriggeringDebris"
                                                },
                                                {
                                                    "source": "trigger",
                                                    "id": "getLastTouchedProjectile"
                                                },
                                                {
                                                    "source": "trigger",
                                                    "id": "getTriggeringProjectile"
                                                },
                                                {
                                                    "source": "trigger",
                                                    "id": "getTriggeringUnit"
                                                },
                                                {
                                                    "source": "trigger",
                                                    "id": "getLastTouchingUnit"
                                                },
                                                {
                                                    "source": "trigger",
                                                    "id": "getTriggeringProjectile"
                                                }
                                            ],
                                            "entity": {
                                                "vars": [
                                                    {
                                                        "source": "trigger",
                                                        "id": "getTriggeringProjectile"
                                                    },
                                                    {
                                                        "source": "trigger",
                                                        "id": "getTriggeringDebris"
                                                    },
                                                    {
                                                        "source": "trigger",
                                                        "id": "getLastTouchedProjectile"
                                                    },
                                                    {
                                                        "source": "trigger",
                                                        "id": "getTriggeringProjectile"
                                                    },
                                                    {
                                                        "source": "trigger",
                                                        "id": "getTriggeringUnit"
                                                    },
                                                    {
                                                        "source": "trigger",
                                                        "id": "getLastTouchingUnit"
                                                    },
                                                    {
                                                        "source": "trigger",
                                                        "id": "getTriggeringProjectile"
                                                    }
                                                ],
                                                "function": "getSourceUnitOfProjectile",
                                                "entity": {
                                                    "vars": [
                                                        {
                                                            "source": "trigger",
                                                            "id": "getTriggeringProjectile"
                                                        },
                                                        {
                                                            "source": "trigger",
                                                            "id": "getTriggeringDebris"
                                                        },
                                                        {
                                                            "source": "trigger",
                                                            "id": "getLastTouchedProjectile"
                                                        },
                                                        {
                                                            "source": "trigger",
                                                            "id": "getTriggeringProjectile"
                                                        },
                                                        {
                                                            "source": "trigger",
                                                            "id": "getTriggeringUnit"
                                                        },
                                                        {
                                                            "source": "trigger",
                                                            "id": "getLastTouchingUnit"
                                                        },
                                                        {
                                                            "source": "trigger",
                                                            "id": "getTriggeringProjectile"
                                                        }
                                                    ],
                                                    "function": "getTriggeringProjectile"
                                                }
                                            },
                                            "function": "getEntityPosition",
                                            "unit": {
                                                "function": "selectedUnit"
                                            }
                                        },
                                        "function": "angleBetweenPositions"
                                    }
                                }
                            ]
                        }
                    ],
                    "else": []
                }
            ],
            "conditions": [
                {
                    "operandType": "boolean",
                    "operator": "=="
                },
                true,
                true
            ],
            "triggers": [
                {
                    "type": "projectileTouchesDebris"
                },
                {
                    "type": "unitTouchesProjectile"
                },
                {
                    "type": "projectileTouchesWall"
                }
            ]
        },
        "rTjNuCzc1h": {
            "key": "rTjNuCzc1h",
            "folderName": "Time-based events",
            "parent": null,
            "order": 4,
            "expanded": true
        },
        "lXgsTw4yA9": {
            "order": 2,
            "parent": null,
            "folderName": "State changes",
            "key": "lXgsTw4yA9",
            "expanded": true
        },
        "3HIhswMTNZ": {
            "order": 5,
            "parent": null,
            "folderName": "Player events",
            "key": "3HIhswMTNZ",
            "expanded": true
        },
        "9GfMbWrWRJ": {
            "key": "9GfMbWrWRJ",
            "folderName": "Abilities",
            "parent": null,
            "order": 6,
            "expanded": true
        },
        "YMkMZ064wI": {
            "order": 3,
            "parent": "9GfMbWrWRJ",
            "key": "YMkMZ064wI",
            "triggers": [],
            "conditions": [
                {
                    "operator": "==",
                    "operandType": "boolean"
                },
                true,
                true
            ],
            "actions": [
                {
                    "type": "dropAllItems",
                    "entity": {
                        "function": "getLastCastingUnit",
                        "vars": [
                            {
                                "source": "ability",
                                "id": "getLastCastingUnit"
                            }
                        ]
                    },
                    "vars": [
                        {
                            "source": "ability",
                            "id": "getLastCastingUnit"
                        }
                    ]
                },
                {
                    "comment": "",
                    "type": "condition",
                    "conditions": [
                        {
                            "operator": "==",
                            "operandType": "string"
                        },
                        {
                            "function": "getVariable",
                            "variableName": "state",
                            "vars": [
                                {
                                    "source": "ability",
                                    "id": "getLastCastingUnit"
                                }
                            ]
                        },
                        "gameover"
                    ],
                    "then": [
                        {
                            "else": [],
                            "then": [
                                {
                                    "type": "destroyEntity",
                                    "entity": {
                                        "entity": {
                                            "function": "getLastCastingUnit",
                                            "vars": [
                                                {
                                                    "source": "ability",
                                                    "id": "getLastCastingUnit"
                                                }
                                            ]
                                        },
                                        "function": "getItemCurrentlyHeldByUnit",
                                        "vars": [
                                            {
                                                "source": "ability",
                                                "id": "getLastCastingUnit"
                                            }
                                        ]
                                    },
                                    "vars": [
                                        {
                                            "source": "ability",
                                            "id": "getLastCastingUnit"
                                        }
                                    ]
                                }
                            ],
                            "conditions": [
                                {
                                    "operandType": "number",
                                    "operator": "<"
                                },
                                {
                                    "variableName": "timeLeft",
                                    "function": "getVariable",
                                    "vars": [
                                        {
                                            "source": "ability",
                                            "id": "getLastCastingUnit"
                                        }
                                    ]
                                },
                                5
                            ],
                            "type": "condition",
                            "vars": [
                                {
                                    "source": "ability",
                                    "id": "getLastCastingUnit"
                                }
                            ]
                        }
                    ],
                    "else": [],
                    "vars": [
                        {
                            "source": "ability",
                            "id": "getLastCastingUnit"
                        }
                    ]
                }
            ],
            "name": "drop item"
        },
        "FPmP0mVeqG": {
            "name": "stop using item",
            "actions": [
                {
                    "cspEnabled": true,
                    "entity": {
                        "entity": {
                            "function": "getLastCastingUnit",
                            "vars": [
                                {
                                    "source": "ability",
                                    "id": "getLastCastingUnit"
                                }
                            ]
                        },
                        "function": "getItemCurrentlyHeldByUnit",
                        "vars": [
                            {
                                "source": "ability",
                                "id": "getLastCastingUnit"
                            }
                        ]
                    },
                    "type": "stopUsingItem",
                    "vars": [
                        {
                            "source": "ability",
                            "id": "getLastCastingUnit"
                        }
                    ]
                }
            ],
            "conditions": [
                {
                    "operandType": "boolean",
                    "operator": "=="
                },
                true,
                true
            ],
            "triggers": [],
            "key": "FPmP0mVeqG",
            "parent": "9GfMbWrWRJ",
            "order": 1
        },
        "zX0Q6doKxN": {
            "order": 7,
            "parent": "nD7ne7eUU6",
            "key": "zX0Q6doKxN",
            "triggers": [],
            "conditions": [
                {
                    "operator": "==",
                    "operandType": "boolean"
                },
                true,
                true
            ],
            "actions": [
                {
                    "vars": [
                        {
                            "source": "ability",
                            "id": "getLastCastingUnit"
                        }
                    ],
                    "cspEnabled": true,
                    "type": "condition",
                    "conditions": [
                        {
                            "operator": "==",
                            "operandType": "number"
                        },
                        {
                            "vars": [
                                {
                                    "source": "ability",
                                    "id": "getLastCastingUnit"
                                }
                            ],
                            "function": "getEntityAttribute",
                            "attribute": "v5JkWLylHp",
                            "entity": {
                                "vars": [
                                    {
                                        "source": "ability",
                                        "id": "getLastCastingUnit"
                                    }
                                ],
                                "function": "getLastCastingUnit"
                            }
                        },
                        -1
                    ],
                    "then": [
                        {
                            "vars": [
                                {
                                    "source": "ability",
                                    "id": "getLastCastingUnit"
                                }
                            ],
                            "type": "setEntityAttribute",
                            "attribute": "v5JkWLylHp",
                            "entity": {
                                "vars": [
                                    {
                                        "source": "ability",
                                        "id": "getLastCastingUnit"
                                    }
                                ],
                                "function": "getLastCastingUnit"
                            },
                            "value": 0,
                            "cspEnabled": true
                        }
                    ],
                    "else": []
                }
            ],
            "name": "stop moving left"
        },
        "eeQaaUpFeU": {
            "name": "stop moving down",
            "actions": [
                {
                    "vars": [
                        {
                            "source": "ability",
                            "id": "getLastCastingUnit"
                        }
                    ],
                    "cspEnabled": true,
                    "else": [],
                    "then": [
                        {
                            "vars": [
                                {
                                    "source": "ability",
                                    "id": "getLastCastingUnit"
                                }
                            ],
                            "value": 0,
                            "entity": {
                                "vars": [
                                    {
                                        "source": "ability",
                                        "id": "getLastCastingUnit"
                                    }
                                ],
                                "function": "getLastCastingUnit"
                            },
                            "attribute": "B63bI7RmVw",
                            "type": "setEntityAttribute",
                            "cspEnabled": true
                        }
                    ],
                    "conditions": [
                        {
                            "operandType": "number",
                            "operator": "=="
                        },
                        {
                            "vars": [
                                {
                                    "source": "ability",
                                    "id": "getLastCastingUnit"
                                }
                            ],
                            "entity": {
                                "vars": [
                                    {
                                        "source": "ability",
                                        "id": "getLastCastingUnit"
                                    }
                                ],
                                "function": "getLastCastingUnit"
                            },
                            "attribute": "B63bI7RmVw",
                            "function": "getEntityAttribute"
                        },
                        1
                    ],
                    "type": "condition"
                }
            ],
            "conditions": [
                {
                    "operandType": "boolean",
                    "operator": "=="
                },
                true,
                true
            ],
            "triggers": [],
            "key": "eeQaaUpFeU",
            "parent": "nD7ne7eUU6",
            "order": 6
        },
        "j9Vhcbx4qz": {
            "order": 5,
            "parent": "nD7ne7eUU6",
            "key": "j9Vhcbx4qz",
            "triggers": [],
            "conditions": [
                {
                    "operator": "==",
                    "operandType": "boolean"
                },
                true,
                true
            ],
            "actions": [
                {
                    "vars": [
                        {
                            "source": "ability",
                            "id": "getLastCastingUnit"
                        }
                    ],
                    "cspEnabled": true,
                    "type": "condition",
                    "conditions": [
                        {
                            "operator": "==",
                            "operandType": "number"
                        },
                        {
                            "vars": [
                                {
                                    "source": "ability",
                                    "id": "getLastCastingUnit"
                                }
                            ],
                            "function": "getEntityAttribute",
                            "attribute": "v5JkWLylHp",
                            "entity": {
                                "vars": [
                                    {
                                        "source": "ability",
                                        "id": "getLastCastingUnit"
                                    }
                                ],
                                "function": "getLastCastingUnit"
                            }
                        },
                        1
                    ],
                    "then": [
                        {
                            "vars": [
                                {
                                    "source": "ability",
                                    "id": "getLastCastingUnit"
                                }
                            ],
                            "type": "setEntityAttribute",
                            "attribute": "v5JkWLylHp",
                            "entity": {
                                "vars": [
                                    {
                                        "source": "ability",
                                        "id": "getLastCastingUnit"
                                    }
                                ],
                                "function": "getLastCastingUnit"
                            },
                            "value": 0,
                            "cspEnabled": true
                        }
                    ],
                    "else": []
                }
            ],
            "name": "stop moving right"
        },
        "ThQ6FJTMoH": {
            "name": "stop moving up",
            "actions": [
                {
                    "vars": [
                        {
                            "source": "ability",
                            "id": "getLastCastingUnit"
                        }
                    ],
                    "else": [],
                    "then": [
                        {
                            "vars": [
                                {
                                    "source": "ability",
                                    "id": "getLastCastingUnit"
                                }
                            ],
                            "cspEnabled": true,
                            "value": 0,
                            "entity": {
                                "vars": [
                                    {
                                        "source": "ability",
                                        "id": "getLastCastingUnit"
                                    }
                                ],
                                "function": "getLastCastingUnit"
                            },
                            "attribute": "B63bI7RmVw",
                            "type": "setEntityAttribute"
                        }
                    ],
                    "conditions": [
                        {
                            "operandType": "number",
                            "operator": "=="
                        },
                        {
                            "vars": [
                                {
                                    "source": "ability",
                                    "id": "getLastCastingUnit"
                                }
                            ],
                            "entity": {
                                "vars": [
                                    {
                                        "source": "ability",
                                        "id": "getLastCastingUnit"
                                    }
                                ],
                                "function": "getLastCastingUnit"
                            },
                            "attribute": "B63bI7RmVw",
                            "function": "getEntityAttribute"
                        },
                        -1
                    ],
                    "type": "condition",
                    "cspEnabled": true
                }
            ],
            "conditions": [
                {
                    "operandType": "boolean",
                    "operator": "=="
                },
                true,
                true
            ],
            "triggers": [],
            "key": "ThQ6FJTMoH",
            "parent": "nD7ne7eUU6",
            "order": 4
        },
        "Yu68d8saDz": {
            "order": 1,
            "parent": "rTjNuCzc1h",
            "key": "Yu68d8saDz",
            "triggers": [
                {
                    "type": "frameTick"
                }
            ],
            "conditions": [
                {
                    "operator": "==",
                    "operandType": "boolean"
                },
                true,
                true
            ],
            "actions": [
                {
                    "vars": [
                        {
                            "source": "forAllUnits",
                            "id": "selectedUnit"
                        },
                        {
                            "source": "forAllUnits",
                            "id": "getSelectedUnit"
                        }
                    ],
                    "cspEnabled": false,
                    "type": "forAllUnits",
                    "actions": [
                        {
                            "vars": [
                                {
                                    "source": "forAllUnits",
                                    "id": "selectedUnit"
                                },
                                {
                                    "source": "forAllUnits",
                                    "id": "getSelectedUnit"
                                }
                            ],
                            "type": "condition",
                            "conditions": [
                                {
                                    "operandType": "boolean",
                                    "operator": "=="
                                },
                                {
                                    "vars": [
                                        {
                                            "source": "forAllUnits",
                                            "id": "selectedUnit"
                                        },
                                        {
                                            "source": "forAllUnits",
                                            "id": "getSelectedUnit"
                                        }
                                    ],
                                    "function": "playerIsControlledByHuman",
                                    "player": {
                                        "vars": [
                                            {
                                                "source": "forAllUnits",
                                                "id": "selectedUnit"
                                            },
                                            {
                                                "source": "forAllUnits",
                                                "id": "getSelectedUnit"
                                            }
                                        ],
                                        "function": "getOwner",
                                        "entity": {
                                            "vars": [
                                                {
                                                    "source": "forAllUnits",
                                                    "id": "selectedUnit"
                                                },
                                                {
                                                    "source": "forAllUnits",
                                                    "id": "getSelectedUnit"
                                                }
                                            ],
                                            "function": "selectedUnit"
                                        }
                                    }
                                },
                                true
                            ],
                            "then": [
                                {
                                    "vars": [
                                        {
                                            "source": "forAllUnits",
                                            "id": "selectedUnit"
                                        },
                                        {
                                            "source": "forAllUnits",
                                            "id": "getSelectedUnit"
                                        }
                                    ],
                                    "cspEnabled": false,
                                    "type": "setVariable",
                                    "variableName": "movementSpeed",
                                    "value": {
                                        "vars": [
                                            {
                                                "source": "forAllUnits",
                                                "id": "selectedUnit"
                                            },
                                            {
                                                "source": "forAllUnits",
                                                "id": "getSelectedUnit"
                                            }
                                        ],
                                        "function": "calculate",
                                        "items": [
                                            {
                                                "operator": "*"
                                            },
                                            {
                                                "function": "getEntityAttribute",
                                                "attribute": "XIBc1OnSZt",
                                                "entity": {
                                                    "function": "selectedUnit"
                                                }
                                            },
                                            {
                                                "entity": {
                                                    "entity": {
                                                        "function": "selectedUnit"
                                                    },
                                                    "function": "getOwner"
                                                },
                                                "attribute": "1QtjsHQebg",
                                                "function": "getPlayerAttribute"
                                            }
                                        ]
                                    },
                                    "comment": ""
                                },
                                {
                                    "vars": [
                                        {
                                            "source": "forAllUnits",
                                            "id": "selectedUnit"
                                        },
                                        {
                                            "source": "forAllUnits",
                                            "id": "getSelectedUnit"
                                        }
                                    ],
                                    "disabled": false,
                                    "type": "rotateEntityToFacePosition",
                                    "entity": {
                                        "vars": [
                                            {
                                                "source": "forAllUnits",
                                                "id": "selectedUnit"
                                            },
                                            {
                                                "source": "forAllUnits",
                                                "id": "getSelectedUnit"
                                            }
                                        ],
                                        "function": "selectedUnit"
                                    },
                                    "position": {
                                        "vars": [
                                            {
                                                "source": "forAllUnits",
                                                "id": "selectedUnit"
                                            },
                                            {
                                                "source": "forAllUnits",
                                                "id": "getSelectedUnit"
                                            }
                                        ],
                                        "function": "getMouseCursorPosition",
                                        "player": {
                                            "vars": [
                                                {
                                                    "source": "forAllUnits",
                                                    "id": "selectedUnit"
                                                },
                                                {
                                                    "source": "forAllUnits",
                                                    "id": "getSelectedUnit"
                                                }
                                            ],
                                            "function": "getOwner",
                                            "entity": {
                                                "vars": [
                                                    {
                                                        "source": "forAllUnits",
                                                        "id": "selectedUnit"
                                                    },
                                                    {
                                                        "source": "forAllUnits",
                                                        "id": "getSelectedUnit"
                                                    }
                                                ],
                                                "function": "selectedUnit"
                                            }
                                        }
                                    },
                                    "cspEnabled": false
                                },
                                {
                                    "vars": [
                                        {
                                            "source": "forAllUnits",
                                            "id": "selectedUnit"
                                        },
                                        {
                                            "source": "forAllUnits",
                                            "id": "getSelectedUnit"
                                        }
                                    ],
                                    "cspEnabled": false,
                                    "angle": {
                                        "vars": [
                                            {
                                                "source": "forAllUnits",
                                                "id": "selectedUnit"
                                            },
                                            {
                                                "source": "forAllUnits",
                                                "id": "getSelectedUnit"
                                            }
                                        ],
                                        "function": "angleBetweenPositions",
                                        "positionA": {
                                            "vars": [
                                                {
                                                    "source": "forAllUnits",
                                                    "id": "selectedUnit"
                                                },
                                                {
                                                    "source": "forAllUnits",
                                                    "id": "getSelectedUnit"
                                                }
                                            ],
                                            "entity": {
                                                "vars": [
                                                    {
                                                        "source": "forAllUnits",
                                                        "id": "selectedUnit"
                                                    },
                                                    {
                                                        "source": "forAllUnits",
                                                        "id": "getSelectedUnit"
                                                    }
                                                ],
                                                "function": "selectedUnit"
                                            },
                                            "function": "getEntityPosition"
                                        },
                                        "positionB": {
                                            "vars": [
                                                {
                                                    "source": "forAllUnits",
                                                    "id": "selectedUnit"
                                                },
                                                {
                                                    "source": "forAllUnits",
                                                    "id": "getSelectedUnit"
                                                }
                                            ],
                                            "function": "xyCoordinate",
                                            "x": {
                                                "vars": [
                                                    {
                                                        "source": "forAllUnits",
                                                        "id": "selectedUnit"
                                                    },
                                                    {
                                                        "source": "forAllUnits",
                                                        "id": "getSelectedUnit"
                                                    }
                                                ],
                                                "function": "calculate",
                                                "items": [
                                                    "+",
                                                    {
                                                        "function": "getPositionX",
                                                        "position": {
                                                            "function": "getEntityPosition",
                                                            "entity": {
                                                                "function": "selectedUnit"
                                                            }
                                                        }
                                                    },
                                                    {
                                                        "function": "getEntityAttribute",
                                                        "attribute": "v5JkWLylHp",
                                                        "entity": {
                                                            "function": "selectedUnit"
                                                        }
                                                    }
                                                ]
                                            },
                                            "y": {
                                                "vars": [
                                                    {
                                                        "source": "forAllUnits",
                                                        "id": "selectedUnit"
                                                    },
                                                    {
                                                        "source": "forAllUnits",
                                                        "id": "getSelectedUnit"
                                                    }
                                                ],
                                                "function": "calculate",
                                                "items": [
                                                    "+",
                                                    {
                                                        "function": "getPositionY",
                                                        "position": {
                                                            "function": "getEntityPosition",
                                                            "entity": {
                                                                "function": "selectedUnit"
                                                            }
                                                        }
                                                    },
                                                    {
                                                        "function": "getEntityAttribute",
                                                        "attribute": "B63bI7RmVw",
                                                        "entity": {
                                                            "function": "selectedUnit"
                                                        }
                                                    }
                                                ]
                                            }
                                        }
                                    },
                                    "speed": {
                                        "vars": [
                                            {
                                                "source": "forAllUnits",
                                                "id": "selectedUnit"
                                            },
                                            {
                                                "source": "forAllUnits",
                                                "id": "getSelectedUnit"
                                            }
                                        ],
                                        "items": [
                                            {
                                                "operator": "/"
                                            },
                                            {
                                                "variableName": "movementSpeed",
                                                "function": "getVariable"
                                            },
                                            21
                                        ],
                                        "function": "calculate"
                                    },
                                    "entity": {
                                        "vars": [
                                            {
                                                "source": "forAllUnits",
                                                "id": "selectedUnit"
                                            },
                                            {
                                                "source": "forAllUnits",
                                                "id": "getSelectedUnit"
                                            }
                                        ],
                                        "function": "selectedUnit"
                                    },
                                    "type": "setEntityVelocityAtAngle",
                                    "unit": {
                                        "function": "selectedUnit"
                                    }
                                }
                            ],
                            "else": [],
                            "cspEnabled": false
                        }
                    ],
                    "unitGroup": {
                        "vars": [
                            {
                                "source": "forAllUnits",
                                "id": "selectedUnit"
                            },
                            {
                                "source": "forAllUnits",
                                "id": "getSelectedUnit"
                            }
                        ],
                        "function": "allUnits"
                    }
                }
            ],
            "name": "every frame - move all units"
        },
        "ln6972TmhW": {
            "name": "move down",
            "actions": [
                {
                    "vars": [
                        {
                            "source": "ability",
                            "id": "getLastCastingUnit"
                        }
                    ],
                    "value": 1,
                    "entity": {
                        "vars": [
                            {
                                "source": "ability",
                                "id": "getLastCastingUnit"
                            }
                        ],
                        "function": "getLastCastingUnit"
                    },
                    "attribute": "B63bI7RmVw",
                    "type": "setEntityAttribute",
                    "cspEnabled": true
                },
                {
                    "vars": [
                        {
                            "source": "ability",
                            "id": "getLastCastingUnit"
                        }
                    ],
                    "type": "setEntityAttribute",
                    "attribute": "T6OgiGXZ9S",
                    "entity": {
                        "vars": [
                            {
                                "source": "ability",
                                "id": "getLastCastingUnit"
                            }
                        ],
                        "function": "getLastCastingUnit"
                    },
                    "value": {
                        "vars": [
                            {
                                "source": "ability",
                                "id": "getLastCastingUnit"
                            }
                        ],
                        "function": "entityAttributeMax",
                        "attribute": "T6OgiGXZ9S",
                        "entity": {
                            "vars": [
                                {
                                    "source": "ability",
                                    "id": "getLastCastingUnit"
                                }
                            ],
                            "function": "getLastCastingUnit"
                        }
                    }
                }
            ],
            "conditions": [
                {
                    "operandType": "boolean",
                    "operator": "=="
                },
                true,
                true
            ],
            "triggers": [],
            "key": "ln6972TmhW",
            "parent": "nD7ne7eUU6",
            "order": 2
        },
        "ppUPGjZfjj": {
            "order": 3,
            "parent": "nD7ne7eUU6",
            "key": "ppUPGjZfjj",
            "triggers": [],
            "conditions": [
                {
                    "operator": "==",
                    "operandType": "boolean"
                },
                true,
                true
            ],
            "actions": [
                {
                    "vars": [
                        {
                            "source": "ability",
                            "id": "getLastCastingUnit"
                        }
                    ],
                    "cspEnabled": true,
                    "type": "setEntityAttribute",
                    "attribute": "v5JkWLylHp",
                    "entity": {
                        "vars": [
                            {
                                "source": "ability",
                                "id": "getLastCastingUnit"
                            }
                        ],
                        "function": "getLastCastingUnit"
                    },
                    "value": -1
                },
                {
                    "vars": [
                        {
                            "source": "ability",
                            "id": "getLastCastingUnit"
                        }
                    ],
                    "value": {
                        "vars": [
                            {
                                "source": "ability",
                                "id": "getLastCastingUnit"
                            }
                        ],
                        "entity": {
                            "vars": [
                                {
                                    "source": "ability",
                                    "id": "getLastCastingUnit"
                                }
                            ],
                            "function": "getLastCastingUnit"
                        },
                        "attribute": "T6OgiGXZ9S",
                        "function": "entityAttributeMax"
                    },
                    "entity": {
                        "vars": [
                            {
                                "source": "ability",
                                "id": "getLastCastingUnit"
                            }
                        ],
                        "function": "getLastCastingUnit"
                    },
                    "attribute": "T6OgiGXZ9S",
                    "type": "setEntityAttribute"
                }
            ],
            "name": "move left"
        },
        "aoxwi5IuXq": {
            "name": "move right",
            "actions": [
                {
                    "vars": [
                        {
                            "source": "ability",
                            "id": "getLastCastingUnit"
                        }
                    ],
                    "value": 1,
                    "entity": {
                        "vars": [
                            {
                                "source": "ability",
                                "id": "getLastCastingUnit"
                            }
                        ],
                        "function": "getLastCastingUnit"
                    },
                    "attribute": "v5JkWLylHp",
                    "type": "setEntityAttribute",
                    "cspEnabled": true
                },
                {
                    "vars": [
                        {
                            "source": "ability",
                            "id": "getLastCastingUnit"
                        }
                    ],
                    "type": "setEntityAttribute",
                    "attribute": "T6OgiGXZ9S",
                    "entity": {
                        "vars": [
                            {
                                "source": "ability",
                                "id": "getLastCastingUnit"
                            }
                        ],
                        "function": "getLastCastingUnit"
                    },
                    "value": {
                        "vars": [
                            {
                                "source": "ability",
                                "id": "getLastCastingUnit"
                            }
                        ],
                        "function": "entityAttributeMax",
                        "attribute": "T6OgiGXZ9S",
                        "entity": {
                            "vars": [
                                {
                                    "source": "ability",
                                    "id": "getLastCastingUnit"
                                }
                            ],
                            "function": "getLastCastingUnit"
                        }
                    }
                }
            ],
            "conditions": [
                {
                    "operandType": "boolean",
                    "operator": "=="
                },
                true,
                true
            ],
            "triggers": [],
            "key": "aoxwi5IuXq",
            "parent": "nD7ne7eUU6",
            "order": 1
        },
        "YtZKI0m4CZ": {
            "name": "move up",
            "actions": [
                {
                    "vars": [
                        {
                            "source": "ability",
                            "id": "getLastCastingUnit"
                        }
                    ],
                    "value": -1,
                    "entity": {
                        "vars": [
                            {
                                "source": "ability",
                                "id": "getLastCastingUnit"
                            }
                        ],
                        "function": "getLastCastingUnit"
                    },
                    "attribute": "B63bI7RmVw",
                    "type": "setEntityAttribute",
                    "cspEnabled": true
                },
                {
                    "vars": [
                        {
                            "source": "ability",
                            "id": "getLastCastingUnit"
                        }
                    ],
                    "value": {
                        "vars": [
                            {
                                "source": "ability",
                                "id": "getLastCastingUnit"
                            }
                        ],
                        "entity": {
                            "vars": [
                                {
                                    "source": "ability",
                                    "id": "getLastCastingUnit"
                                }
                            ],
                            "function": "getLastCastingUnit"
                        },
                        "attribute": "T6OgiGXZ9S",
                        "function": "entityAttributeMax"
                    },
                    "entity": {
                        "vars": [
                            {
                                "source": "ability",
                                "id": "getLastCastingUnit"
                            }
                        ],
                        "function": "getLastCastingUnit"
                    },
                    "attribute": "T6OgiGXZ9S",
                    "type": "setEntityAttribute"
                }
            ],
            "conditions": [
                {
                    "operandType": "boolean",
                    "operator": "=="
                },
                true,
                true
            ],
            "triggers": [],
            "key": "YtZKI0m4CZ",
            "parent": "nD7ne7eUU6",
            "order": 0
        },
        "playerJoined": {
            "order": 0,
            "parent": "3HIhswMTNZ",
            "key": "playerJoined",
            "actions": [
                {
                    "else": [
                        {
                            "type": "createUnitAtPosition",
                            "unitType": "human",
                            "position": {
                                "function": "getRandomPositionInRegion",
                                "region": {
                                    "function": "getVariable",
                                    "variableName": "spawn"
                                }
                            },
                            "entity": {
                                "function": "getTriggeringPlayer"
                            },
                            "angle": 0
                        },
                        {
                            "type": "assignPlayerType",
                            "playerType": "w1NiT3YV0e",
                            "entity": {
                                "function": "getTriggeringPlayer"
                            }
                        },
                        {
                            "value": 0,
                            "entity": {
                                "function": "getTriggeringPlayer"
                            },
                            "attribute": "n5JEoENeGg",
                            "type": "setPlayerAttribute"
                        }
                    ],
                    "then": [
                        {
                            "type": "createUnitAtPosition",
                            "unitType": "zombie",
                            "position": {
                                "function": "getRandomPositionInRegion",
                                "region": {
                                    "function": "getVariable",
                                    "variableName": "spawn"
                                }
                            },
                            "entity": {
                                "function": "getTriggeringPlayer"
                            },
                            "angle": 0
                        },
                        {
                            "type": "assignPlayerType",
                            "playerType": "X90ySSRC3b",
                            "entity": {
                                "function": "getTriggeringPlayer"
                            }
                        },
                        {
                            "value": 250,
                            "entity": {
                                "function": "getTriggeringPlayer"
                            },
                            "attribute": "n5JEoENeGg",
                            "type": "setPlayerAttribute"
                        }
                    ],
                    "conditions": [
                        {
                            "operandType": "string",
                            "operator": "=="
                        },
                        {
                            "variableName": "state",
                            "function": "getVariable"
                        },
                        "postoutbreak"
                    ],
                    "type": "condition",
                    "comment": "if player joins during the outbreak, make his unit a zombie. Otherwise, make his unit human"
                },
                {
                    "target": "top",
                    "type": "showUiTextForPlayer",
                    "entity": {
                        "function": "getTriggeringPlayer"
                    },
                    "comment": "Show \"Time remaining.. \" message to the newly joined player"
                },
                {
                    "type": "playerCameraTrackUnit",
                    "player": {
                        "function": "getTriggeringPlayer"
                    },
                    "unit": {
                        "function": "getLastCreatedUnit"
                    }
                },
                {
                    "comment": "Do NOT touch this! - m0dE",
                    "disabled": false,
                    "value": {
                        "function": "entityAttributeMax",
                        "attribute": "T6OgiGXZ9S",
                        "entity": {
                            "function": "getLastCreatedUnit"
                        }
                    },
                    "entity": {
                        "function": "getLastCreatedUnit"
                    },
                    "attribute": "T6OgiGXZ9S",
                    "type": "setEntityAttribute"
                },
                {
                    "else": [],
                    "then": [
                        {
                            "type": "setUnitNameLabel",
                            "unit": {
                                "function": "getLastCreatedUnit"
                            },
                            "name": "      m0dE   👑"
                        }
                    ],
                    "conditions": [
                        {
                            "operator": "==",
                            "operandType": "string"
                        },
                        {
                            "entity": {
                                "function": "getTriggeringPlayer"
                            },
                            "function": "getPlayerName"
                        },
                        "m0dE"
                    ],
                    "type": "condition",
                    "disabled": false
                },
                {
                    "cspEnabled": false,
                    "else": [],
                    "then": [
                        {
                            "cspEnabled": false,
                            "type": "setUnitNameLabel",
                            "unit": {
                                "function": "getLastCreatedUnit"
                            },
                            "name": "      Phantasma   🔨",
                            "disabled": false
                        }
                    ],
                    "conditions": [
                        {
                            "operator": "==",
                            "operandType": "string"
                        },
                        {
                            "entity": {
                                "function": "getTriggeringPlayer"
                            },
                            "function": "getPlayerName"
                        },
                        "Phantasma"
                    ],
                    "type": "condition",
                    "disabled": false
                },
                {
                    "disabled": false,
                    "type": "condition",
                    "conditions": [
                        {
                            "operandType": "string",
                            "operator": "=="
                        },
                        {
                            "function": "getPlayerName",
                            "entity": {
                                "function": "getTriggeringPlayer"
                            }
                        },
                        "parth"
                    ],
                    "then": [
                        {
                            "name": "      parth   🔨",
                            "unit": {
                                "function": "getLastCreatedUnit"
                            },
                            "type": "setUnitNameLabel"
                        }
                    ],
                    "else": []
                },
                {
                    "disabled": false,
                    "type": "condition",
                    "conditions": [
                        {
                            "operandType": "string",
                            "operator": "=="
                        },
                        {
                            "function": "getPlayerName",
                            "entity": {
                                "function": "getTriggeringPlayer"
                            }
                        },
                        "nishant"
                    ],
                    "then": [
                        {
                            "name": "      nishant   🔨",
                            "unit": {
                                "function": "getLastCreatedUnit"
                            },
                            "type": "setUnitNameLabel"
                        }
                    ],
                    "else": []
                },
                {
                    "disabled": false,
                    "type": "condition",
                    "conditions": [
                        {
                            "operandType": "string",
                            "operator": "=="
                        },
                        {
                            "function": "getPlayerName",
                            "entity": {
                                "function": "getTriggeringPlayer"
                            }
                        },
                        "cristi123"
                    ],
                    "then": [
                        {
                            "name": "      cristi123   🔪",
                            "unit": {
                                "function": "getLastCreatedUnit"
                            },
                            "type": "setUnitNameLabel"
                        }
                    ],
                    "else": []
                },
                {
                    "else": [],
                    "then": [
                        {
                            "type": "setUnitNameLabel",
                            "unit": {
                                "function": "getLastCreatedUnit"
                            },
                            "name": "      QiNG-agar   🔪"
                        }
                    ],
                    "conditions": [
                        {
                            "operator": "==",
                            "operandType": "string"
                        },
                        {
                            "entity": {
                                "function": "getTriggeringPlayer"
                            },
                            "function": "getPlayerName"
                        },
                        "QiNG-agar"
                    ],
                    "type": "condition",
                    "disabled": false
                },
                {
                    "else": [],
                    "then": [
                        {
                            "type": "setUnitNameLabel",
                            "unit": {
                                "function": "getLastCreatedUnit"
                            },
                            "name": "      yaoi   🔪"
                        }
                    ],
                    "conditions": [
                        {
                            "operator": "==",
                            "operandType": "string"
                        },
                        {
                            "entity": {
                                "function": "getTriggeringPlayer"
                            },
                            "function": "getPlayerName"
                        },
                        "yaoi"
                    ],
                    "type": "condition",
                    "disabled": false
                },
                {
                    "disabled": false,
                    "type": "condition",
                    "conditions": [
                        {
                            "operandType": "string",
                            "operator": "=="
                        },
                        {
                            "function": "getPlayerName",
                            "entity": {
                                "function": "getTriggeringPlayer"
                            }
                        },
                        "SPL-Splitter"
                    ],
                    "then": [
                        {
                            "name": "      SPL-Splitter   🔪",
                            "unit": {
                                "function": "getLastCreatedUnit"
                            },
                            "type": "setUnitNameLabel"
                        }
                    ],
                    "else": []
                },
                {
                    "cspEnabled": false,
                    "else": [],
                    "then": [
                        {
                            "cspEnabled": false,
                            "type": "setUnitNameLabel",
                            "unit": {
                                "function": "getLastCreatedUnit"
                            },
                            "name": "      SpookySam   ⭐️",
                            "disabled": false
                        }
                    ],
                    "conditions": [
                        {
                            "operator": "==",
                            "operandType": "string"
                        },
                        {
                            "entity": {
                                "function": "getTriggeringPlayer"
                            },
                            "function": "getPlayerName"
                        },
                        "SpookySam"
                    ],
                    "type": "condition",
                    "disabled": false
                },
                {
                    "cspEnabled": false,
                    "else": [],
                    "then": [
                        {
                            "cspEnabled": false,
                            "type": "setUnitNameLabel",
                            "unit": {
                                "function": "getLastCreatedUnit"
                            },
                            "name": "      JUKEGOD_龙   ⭐️",
                            "disabled": false
                        }
                    ],
                    "conditions": [
                        {
                            "operator": "==",
                            "operandType": "string"
                        },
                        {
                            "entity": {
                                "function": "getTriggeringPlayer"
                            },
                            "function": "getPlayerName"
                        },
                        "JUKEGOD_龙"
                    ],
                    "type": "condition",
                    "disabled": false
                },
                {
                    "cspEnabled": false,
                    "else": [],
                    "then": [
                        {
                            "cspEnabled": false,
                            "type": "setUnitNameLabel",
                            "unit": {
                                "function": "getLastCreatedUnit"
                            },
                            "name": "      amulet   ⭐️",
                            "disabled": false
                        }
                    ],
                    "conditions": [
                        {
                            "operator": "==",
                            "operandType": "string"
                        },
                        {
                            "entity": {
                                "function": "getTriggeringPlayer"
                            },
                            "function": "getPlayerName"
                        },
                        "amulet"
                    ],
                    "type": "condition",
                    "disabled": false
                },
                {
                    "cspEnabled": false,
                    "else": [],
                    "then": [
                        {
                            "cspEnabled": false,
                            "type": "setUnitNameLabel",
                            "unit": {
                                "function": "getLastCreatedUnit"
                            },
                            "name": "      JukeNinja   ⭐️",
                            "disabled": false
                        }
                    ],
                    "conditions": [
                        {
                            "operator": "==",
                            "operandType": "string"
                        },
                        {
                            "entity": {
                                "function": "getTriggeringPlayer"
                            },
                            "function": "getPlayerName"
                        },
                        "JukeNinja"
                    ],
                    "type": "condition",
                    "disabled": false
                },
                {
                    "cspEnabled": false,
                    "else": [],
                    "then": [
                        {
                            "cspEnabled": false,
                            "type": "setUnitNameLabel",
                            "unit": {
                                "function": "getLastCreatedUnit"
                            },
                            "name": "      Peacekeeper   ⭐️",
                            "disabled": false
                        }
                    ],
                    "conditions": [
                        {
                            "operator": "==",
                            "operandType": "string"
                        },
                        {
                            "entity": {
                                "function": "getTriggeringPlayer"
                            },
                            "function": "getPlayerName"
                        },
                        "Peacekeeper"
                    ],
                    "type": "condition",
                    "disabled": false
                },
                {
                    "else": [],
                    "then": [
                        {
                            "type": "setUnitNameLabel",
                            "unit": {
                                "function": "getLastCreatedUnit"
                            },
                            "name": "      tester   🔨"
                        },
                        {
                            "unit": {
                                "function": "getLastCreatedUnit"
                            },
                            "number": 1,
                            "itemType": "baseball_bat",
                            "type": "giveNewItemWithQuantityToUnit"
                        }
                    ],
                    "conditions": [
                        {
                            "operator": "==",
                            "operandType": "string"
                        },
                        {
                            "entity": {
                                "function": "getTriggeringPlayer"
                            },
                            "function": "getPlayerName"
                        },
                        "dvlopertest"
                    ],
                    "type": "condition",
                    "disabled": false
                },
                {
                    "type": "condition",
                    "conditions": [
                        {
                            "operandType": "number",
                            "operator": "=="
                        },
                        {
                            "function": "getValueOfPlayerVariable",
                            "variable": {
                                "function": "getPlayerVariable",
                                "variable": {
                                    "text": "progression",
                                    "dataType": "number",
                                    "entity": "X90ySSRC3b",
                                    "key": "progression"
                                }
                            },
                            "player": {
                                "function": "getTriggeringPlayer"
                            }
                        },
                        0
                    ],
                    "then": [
                        {
                            "value": 1,
                            "variable": {
                                "variable": {
                                    "key": "progression",
                                    "entity": "X90ySSRC3b",
                                    "dataType": "number",
                                    "text": "progression"
                                },
                                "function": "getPlayerVariable"
                            },
                            "player": {
                                "function": "getTriggeringPlayer"
                            },
                            "type": "setPlayerVariable"
                        }
                    ],
                    "else": []
                }
            ],
            "conditions": [],
            "triggers": [
                {
                    "type": "playerJoinsGame"
                }
            ],
            "name": "player joins"
        },
        "reset": {
            "name": "reset",
            "triggers": [],
            "conditions": [],
            "actions": [
                {
                    "type": "hideUiTextForEveryone",
                    "target": "center-lg",
                    "vars": []
                },
                {
                    "type": "forAllUnits",
                    "actions": [
                        {
                            "else": [],
                            "then": [
                                {
                                    "type": "moveEntity",
                                    "entity": {
                                        "function": "selectedUnit",
                                        "vars": [
                                            {
                                                "source": "forAllUnits",
                                                "id": "selectedUnit"
                                            },
                                            {
                                                "source": "forAllUnits",
                                                "id": "getSelectedUnit"
                                            }
                                        ]
                                    },
                                    "position": {
                                        "function": "getRandomPositionInRegion",
                                        "region": {
                                            "function": "getVariable",
                                            "variableName": "spawn",
                                            "vars": [
                                                {
                                                    "source": "forAllUnits",
                                                    "id": "selectedUnit"
                                                },
                                                {
                                                    "source": "forAllUnits",
                                                    "id": "getSelectedUnit"
                                                }
                                            ]
                                        },
                                        "vars": [
                                            {
                                                "source": "forAllUnits",
                                                "id": "selectedUnit"
                                            },
                                            {
                                                "source": "forAllUnits",
                                                "id": "getSelectedUnit"
                                            }
                                        ]
                                    },
                                    "vars": [
                                        {
                                            "source": "forAllUnits",
                                            "id": "selectedUnit"
                                        },
                                        {
                                            "source": "forAllUnits",
                                            "id": "getSelectedUnit"
                                        }
                                    ]
                                },
                                {
                                    "else": [],
                                    "then": [
                                        {
                                            "type": "changeUnitType",
                                            "unitType": "human",
                                            "entity": {
                                                "function": "selectedUnit",
                                                "vars": [
                                                    {
                                                        "source": "forAllUnits",
                                                        "id": "selectedUnit"
                                                    },
                                                    {
                                                        "source": "forAllUnits",
                                                        "id": "getSelectedUnit"
                                                    }
                                                ]
                                            },
                                            "vars": [
                                                {
                                                    "source": "forAllUnits",
                                                    "id": "selectedUnit"
                                                },
                                                {
                                                    "source": "forAllUnits",
                                                    "id": "getSelectedUnit"
                                                }
                                            ]
                                        }
                                    ],
                                    "conditions": [
                                        {
                                            "operandType": "unitType",
                                            "operator": "!="
                                        },
                                        {
                                            "entity": {
                                                "function": "selectedUnit",
                                                "vars": [
                                                    {
                                                        "source": "forAllUnits",
                                                        "id": "selectedUnit"
                                                    },
                                                    {
                                                        "source": "forAllUnits",
                                                        "id": "getSelectedUnit"
                                                    }
                                                ]
                                            },
                                            "function": "getUnitTypeOfUnit",
                                            "vars": [
                                                {
                                                    "source": "forAllUnits",
                                                    "id": "selectedUnit"
                                                },
                                                {
                                                    "source": "forAllUnits",
                                                    "id": "getSelectedUnit"
                                                }
                                            ]
                                        },
                                        "human"
                                    ],
                                    "type": "condition",
                                    "vars": [
                                        {
                                            "source": "forAllUnits",
                                            "id": "selectedUnit"
                                        },
                                        {
                                            "source": "forAllUnits",
                                            "id": "getSelectedUnit"
                                        }
                                    ]
                                },
                                {
                                    "entity": {
                                        "entity": {
                                            "function": "selectedUnit",
                                            "vars": [
                                                {
                                                    "source": "forAllUnits",
                                                    "id": "selectedUnit"
                                                },
                                                {
                                                    "source": "forAllUnits",
                                                    "id": "getSelectedUnit"
                                                }
                                            ]
                                        },
                                        "function": "getOwner",
                                        "vars": [
                                            {
                                                "source": "forAllUnits",
                                                "id": "selectedUnit"
                                            },
                                            {
                                                "source": "forAllUnits",
                                                "id": "getSelectedUnit"
                                            }
                                        ]
                                    },
                                    "playerType": "w1NiT3YV0e",
                                    "type": "assignPlayerType",
                                    "vars": [
                                        {
                                            "source": "forAllUnits",
                                            "id": "selectedUnit"
                                        },
                                        {
                                            "source": "forAllUnits",
                                            "id": "getSelectedUnit"
                                        }
                                    ]
                                },
                                {
                                    "value": 0,
                                    "entity": {
                                        "function": "selectedUnit",
                                        "vars": [
                                            {
                                                "source": "forAllUnits",
                                                "id": "selectedUnit"
                                            },
                                            {
                                                "source": "forAllUnits",
                                                "id": "getSelectedUnit"
                                            }
                                        ]
                                    },
                                    "attribute": "K2mih60v2P",
                                    "type": "setEntityAttribute",
                                    "vars": [
                                        {
                                            "source": "forAllUnits",
                                            "id": "selectedUnit"
                                        },
                                        {
                                            "source": "forAllUnits",
                                            "id": "getSelectedUnit"
                                        }
                                    ]
                                }
                            ],
                            "conditions": [
                                {
                                    "operandType": "boolean",
                                    "operator": "=="
                                },
                                {
                                    "function": "playerIsControlledByHuman",
                                    "player": {
                                        "function": "getOwner",
                                        "entity": {
                                            "function": "selectedUnit",
                                            "vars": [
                                                {
                                                    "source": "forAllUnits",
                                                    "id": "selectedUnit"
                                                },
                                                {
                                                    "source": "forAllUnits",
                                                    "id": "getSelectedUnit"
                                                }
                                            ]
                                        },
                                        "vars": [
                                            {
                                                "source": "forAllUnits",
                                                "id": "selectedUnit"
                                            },
                                            {
                                                "source": "forAllUnits",
                                                "id": "getSelectedUnit"
                                            }
                                        ]
                                    },
                                    "vars": [
                                        {
                                            "source": "forAllUnits",
                                            "id": "selectedUnit"
                                        },
                                        {
                                            "source": "forAllUnits",
                                            "id": "getSelectedUnit"
                                        }
                                    ]
                                },
                                true
                            ],
                            "type": "condition",
                            "vars": [
                                {
                                    "source": "forAllUnits",
                                    "id": "selectedUnit"
                                },
                                {
                                    "source": "forAllUnits",
                                    "id": "getSelectedUnit"
                                }
                            ]
                        }
                    ],
                    "unitGroup": {
                        "function": "allUnits",
                        "vars": [
                            {
                                "source": "forAllUnits",
                                "id": "selectedUnit"
                            },
                            {
                                "source": "forAllUnits",
                                "id": "getSelectedUnit"
                            }
                        ]
                    },
                    "vars": [
                        {
                            "source": "forAllUnits",
                            "id": "selectedUnit"
                        },
                        {
                            "source": "forAllUnits",
                            "id": "getSelectedUnit"
                        }
                    ]
                },
                {
                    "playerGroup": {
                        "function": "allPlayers",
                        "vars": [
                            {
                                "source": "forAllPlayers",
                                "id": "selectedPlayer"
                            },
                            {
                                "source": "forAllPlayers",
                                "id": "getSelectedPlayer"
                            }
                        ]
                    },
                    "actions": [
                        {
                            "entity": {
                                "function": "selectedPlayer",
                                "vars": [
                                    {
                                        "source": "forAllPlayers",
                                        "id": "selectedPlayer"
                                    },
                                    {
                                        "source": "forAllPlayers",
                                        "id": "getSelectedPlayer"
                                    }
                                ]
                            },
                            "value": {
                                "items": [
                                    "+",
                                    {
                                        "entity": {
                                            "function": "selectedPlayer"
                                        },
                                        "attribute": "n5JEoENeGg",
                                        "function": "getPlayerAttribute"
                                    },
                                    500
                                ],
                                "function": "calculate",
                                "vars": [
                                    {
                                        "source": "forAllPlayers",
                                        "id": "selectedPlayer"
                                    },
                                    {
                                        "source": "forAllPlayers",
                                        "id": "getSelectedPlayer"
                                    }
                                ]
                            },
                            "attribute": "n5JEoENeGg",
                            "type": "setPlayerAttribute",
                            "vars": [
                                {
                                    "source": "forAllPlayers",
                                    "id": "selectedPlayer"
                                },
                                {
                                    "source": "forAllPlayers",
                                    "id": "getSelectedPlayer"
                                }
                            ]
                        },
                        {
                            "disabled": false,
                            "type": "hideGameSuggestionsForPlayer",
                            "player": {
                                "function": "selectedPlayer",
                                "vars": [
                                    {
                                        "source": "forAllPlayers",
                                        "id": "selectedPlayer"
                                    },
                                    {
                                        "source": "forAllPlayers",
                                        "id": "getSelectedPlayer"
                                    }
                                ]
                            },
                            "vars": [
                                {
                                    "source": "forAllPlayers",
                                    "id": "selectedPlayer"
                                },
                                {
                                    "source": "forAllPlayers",
                                    "id": "getSelectedPlayer"
                                }
                            ]
                        },
                        {
                            "player": {
                                "function": "selectedPlayer",
                                "vars": [
                                    {
                                        "source": "forAllPlayers",
                                        "id": "selectedPlayer"
                                    },
                                    {
                                        "source": "forAllPlayers",
                                        "id": "getSelectedPlayer"
                                    }
                                ]
                            },
                            "shop": "h7JhXYNhvn",
                            "type": "openShopForPlayer",
                            "vars": [
                                {
                                    "source": "forAllPlayers",
                                    "id": "selectedPlayer"
                                },
                                {
                                    "source": "forAllPlayers",
                                    "id": "getSelectedPlayer"
                                }
                            ]
                        }
                    ],
                    "type": "forAllPlayers",
                    "vars": [
                        {
                            "source": "forAllPlayers",
                            "id": "selectedPlayer"
                        },
                        {
                            "source": "forAllPlayers",
                            "id": "getSelectedPlayer"
                        }
                    ]
                },
                {
                    "debrisGroup": {
                        "function": "allDebris",
                        "vars": [
                            {
                                "source": "forAllDebris",
                                "id": "selectedDebris"
                            },
                            {
                                "source": "forAllDebris",
                                "id": "getSelectedDebris"
                            }
                        ]
                    },
                    "actions": [
                        {
                            "entity": {
                                "function": "selectedDebris",
                                "vars": [
                                    {
                                        "source": "forAllDebris",
                                        "id": "selectedDebris"
                                    },
                                    {
                                        "source": "forAllDebris",
                                        "id": "getSelectedDebris"
                                    }
                                ]
                            },
                            "type": "resetDebrisPosition",
                            "vars": [
                                {
                                    "source": "forAllDebris",
                                    "id": "selectedDebris"
                                },
                                {
                                    "source": "forAllDebris",
                                    "id": "getSelectedDebris"
                                }
                            ]
                        },
                        {
                            "else": [],
                            "then": [
                                {
                                    "quantity": 1,
                                    "type": "spawnItem",
                                    "itemType": "pill",
                                    "position": {
                                        "function": "getEntityPosition",
                                        "entity": {
                                            "function": "selectedDebris",
                                            "vars": [
                                                {
                                                    "source": "forAllDebris",
                                                    "id": "selectedDebris"
                                                },
                                                {
                                                    "source": "forAllDebris",
                                                    "id": "getSelectedDebris"
                                                }
                                            ]
                                        },
                                        "vars": [
                                            {
                                                "source": "forAllDebris",
                                                "id": "selectedDebris"
                                            },
                                            {
                                                "source": "forAllDebris",
                                                "id": "getSelectedDebris"
                                            }
                                        ]
                                    },
                                    "vars": [
                                        {
                                            "source": "forAllDebris",
                                            "id": "selectedDebris"
                                        },
                                        {
                                            "source": "forAllDebris",
                                            "id": "getSelectedDebris"
                                        }
                                    ]
                                }
                            ],
                            "conditions": [
                                {
                                    "operandType": "number",
                                    "operator": "<"
                                },
                                {
                                    "max": 100,
                                    "min": 0,
                                    "function": "getRandomNumberBetween",
                                    "vars": [
                                        {
                                            "source": "forAllDebris",
                                            "id": "selectedDebris"
                                        },
                                        {
                                            "source": "forAllDebris",
                                            "id": "getSelectedDebris"
                                        }
                                    ]
                                },
                                1
                            ],
                            "type": "condition",
                            "vars": [
                                {
                                    "source": "forAllDebris",
                                    "id": "selectedDebris"
                                },
                                {
                                    "source": "forAllDebris",
                                    "id": "getSelectedDebris"
                                }
                            ]
                        },
                        {
                            "entity": {
                                "function": "selectedDebris",
                                "vars": [
                                    {
                                        "source": "forAllDebris",
                                        "id": "selectedDebris"
                                    },
                                    {
                                        "source": "forAllDebris",
                                        "id": "getSelectedDebris"
                                    }
                                ]
                            },
                            "force": {
                                "y": 1,
                                "x": 1
                            },
                            "type": "applyForceOnEntityXY",
                            "vars": [
                                {
                                    "source": "forAllDebris",
                                    "id": "selectedDebris"
                                },
                                {
                                    "source": "forAllDebris",
                                    "id": "getSelectedDebris"
                                }
                            ]
                        }
                    ],
                    "type": "forAllDebris",
                    "vars": [
                        {
                            "source": "forAllDebris",
                            "id": "selectedDebris"
                        },
                        {
                            "source": "forAllDebris",
                            "id": "getSelectedDebris"
                        }
                    ]
                },
                {
                    "type": "forAllItems",
                    "actions": [
                        {
                            "entity": {
                                "function": "selectedItem",
                                "vars": [
                                    {
                                        "source": "forAllItems",
                                        "id": "selectedItem"
                                    },
                                    {
                                        "source": "forAllItems",
                                        "id": "getSelectedItem"
                                    }
                                ]
                            },
                            "type": "destroyEntity",
                            "vars": [
                                {
                                    "source": "forAllItems",
                                    "id": "selectedItem"
                                },
                                {
                                    "source": "forAllItems",
                                    "id": "getSelectedItem"
                                }
                            ]
                        }
                    ],
                    "itemGroup": {
                        "function": "allItemsDroppedOnGround",
                        "vars": [
                            {
                                "source": "forAllItems",
                                "id": "selectedItem"
                            },
                            {
                                "source": "forAllItems",
                                "id": "getSelectedItem"
                            }
                        ]
                    },
                    "vars": [
                        {
                            "source": "forAllItems",
                            "id": "selectedItem"
                        },
                        {
                            "source": "forAllItems",
                            "id": "getSelectedItem"
                        }
                    ]
                }
            ],
            "key": "reset",
            "parent": "lXgsTw4yA9",
            "order": 0
        },
        "updateTimerMessage": {
            "order": 2,
            "parent": "yssVZ9bXmK",
            "key": "updateTimerMessage",
            "actions": [
                {
                    "else": [
                        {
                            "else": [
                                {
                                    "else": [],
                                    "then": [
                                        {
                                            "comment": "",
                                            "value": {
                                                "textB": {
                                                    "textB": " seconds",
                                                    "textA": {
                                                        "variableName": "timeLeft",
                                                        "function": "getVariable",
                                                        "vars": []
                                                    },
                                                    "function": "concat",
                                                    "vars": []
                                                },
                                                "textA": "Game restarting in ",
                                                "function": "concat",
                                                "vars": []
                                            },
                                            "variableName": "timerMessage",
                                            "type": "setVariable",
                                            "vars": []
                                        },
                                        {
                                            "comment": "",
                                            "value": {
                                                "textB": {
                                                    "textB": " seconds",
                                                    "textA": {
                                                        "variableName": "timeLeft",
                                                        "function": "getVariable",
                                                        "vars": []
                                                    },
                                                    "function": "concat",
                                                    "vars": []
                                                },
                                                "textA": "Game restarting in ",
                                                "function": "concat",
                                                "vars": []
                                            },
                                            "variableName": "zombieTimerMessage",
                                            "type": "setVariable",
                                            "vars": []
                                        }
                                    ],
                                    "conditions": [
                                        {
                                            "operandType": "string",
                                            "operator": "=="
                                        },
                                        {
                                            "variableName": "state",
                                            "function": "getVariable",
                                            "vars": []
                                        },
                                        "gameover"
                                    ],
                                    "type": "condition",
                                    "vars": []
                                }
                            ],
                            "then": [
                                {
                                    "comment": "",
                                    "value": {
                                        "textB": {
                                            "textB": "s)",
                                            "textA": {
                                                "variableName": "timeLeft",
                                                "function": "getVariable",
                                                "vars": []
                                            },
                                            "function": "concat",
                                            "vars": []
                                        },
                                        "textA": "You are a Human! Keep the Zombies away! (Time left: ",
                                        "function": "concat",
                                        "vars": []
                                    },
                                    "variableName": "timerMessage",
                                    "type": "setVariable",
                                    "vars": []
                                },
                                {
                                    "type": "setVariable",
                                    "variableName": "zombieTimerMessage",
                                    "value": {
                                        "function": "concat",
                                        "textA": "You are a Zombie! Tag all humans! (Time left: ",
                                        "textB": {
                                            "function": "concat",
                                            "textA": {
                                                "function": "getVariable",
                                                "variableName": "timeLeft",
                                                "vars": []
                                            },
                                            "textB": "s)",
                                            "vars": []
                                        },
                                        "vars": []
                                    },
                                    "comment": "",
                                    "vars": []
                                }
                            ],
                            "conditions": [
                                {
                                    "operandType": "string",
                                    "operator": "=="
                                },
                                {
                                    "variableName": "state",
                                    "function": "getVariable",
                                    "vars": []
                                },
                                "postoutbreak"
                            ],
                            "type": "condition",
                            "vars": []
                        }
                    ],
                    "then": [
                        {
                            "value": {
                                "textB": {
                                    "textB": " seconds. Hide!",
                                    "textA": {
                                        "variableName": "timeLeft",
                                        "function": "getVariable",
                                        "vars": []
                                    },
                                    "function": "concat",
                                    "vars": []
                                },
                                "textA": "Outbreak happening in ",
                                "function": "concat",
                                "vars": []
                            },
                            "variableName": "timerMessage",
                            "type": "setVariable",
                            "vars": []
                        },
                        {
                            "value": {
                                "textB": {
                                    "textB": " seconds. Hide!",
                                    "textA": {
                                        "variableName": "timeLeft",
                                        "function": "getVariable",
                                        "vars": []
                                    },
                                    "function": "concat",
                                    "vars": []
                                },
                                "textA": "Outbreak happening in ",
                                "function": "concat",
                                "vars": []
                            },
                            "variableName": "zombieTimerMessage",
                            "type": "setVariable",
                            "comment": "",
                            "vars": []
                        }
                    ],
                    "conditions": [
                        {
                            "operandType": "string",
                            "operator": "=="
                        },
                        {
                            "variableName": "state",
                            "function": "getVariable",
                            "vars": []
                        },
                        "preoutbreak"
                    ],
                    "type": "condition",
                    "vars": []
                },
                {
                    "value": {
                        "variableName": "timerMessage",
                        "function": "getVariable",
                        "vars": []
                    },
                    "target": "top",
                    "type": "updateUiTextForEveryone",
                    "disabled": true,
                    "vars": []
                }
            ],
            "conditions": [],
            "triggers": [],
            "name": "update timer message"
        },
        "everySecond": {
            "order": 0,
            "parent": "rTjNuCzc1h",
            "key": "everySecond",
            "actions": [
                {
                    "type": "condition",
                    "conditions": [
                        {
                            "operator": ">",
                            "operandType": "number"
                        },
                        {
                            "function": "getPlayerCount"
                        },
                        1
                    ],
                    "then": [
                        {
                            "value": {
                                "items": [
                                    "-",
                                    {
                                        "variableName": "timeLeft",
                                        "function": "getVariable"
                                    },
                                    1
                                ],
                                "function": "calculate"
                            },
                            "variableName": "timeLeft",
                            "type": "setVariable"
                        }
                    ],
                    "else": []
                },
                {
                    "scriptName": "updateTimerMessage",
                    "type": "runScript"
                },
                {
                    "scriptName": "countUnits",
                    "type": "runScript"
                },
                {
                    "actions": [
                        {
                            "type": "condition",
                            "conditions": [
                                {
                                    "operator": "==",
                                    "operandType": "string"
                                },
                                {
                                    "function": "getVariable",
                                    "variableName": "state"
                                },
                                "postoutbreak"
                            ],
                            "then": [
                                {
                                    "else": [
                                        {
                                            "type": "setPlayerAttribute",
                                            "attribute": "n5JEoENeGg",
                                            "value": {
                                                "function": "calculate",
                                                "items": [
                                                    {
                                                        "operator": "*"
                                                    },
                                                    {
                                                        "function": "getPlayerAttribute",
                                                        "attribute": "n5JEoENeGg",
                                                        "entity": {
                                                            "function": "getOwner",
                                                            "entity": {
                                                                "function": "selectedUnit"
                                                            }
                                                        }
                                                    },
                                                    {
                                                        "function": "getVariable",
                                                        "variableName": "@zombieDecay"
                                                    }
                                                ]
                                            },
                                            "entity": {
                                                "function": "getOwner",
                                                "entity": {
                                                    "function": "selectedUnit"
                                                }
                                            }
                                        }
                                    ],
                                    "then": [
                                        {
                                            "type": "setPlayerAttribute",
                                            "attribute": "n5JEoENeGg",
                                            "value": {
                                                "function": "calculate",
                                                "items": [
                                                    "+",
                                                    {
                                                        "function": "getPlayerAttribute",
                                                        "attribute": "n5JEoENeGg",
                                                        "entity": {
                                                            "function": "getOwner",
                                                            "entity": {
                                                                "function": "selectedUnit"
                                                            }
                                                        }
                                                    },
                                                    {
                                                        "function": "calculate",
                                                        "items": [
                                                            {
                                                                "operator": "/"
                                                            },
                                                            {
                                                                "items": [
                                                                    {
                                                                        "operator": "*"
                                                                    },
                                                                    {
                                                                        "variableName": "zombieCount",
                                                                        "function": "getVariable"
                                                                    },
                                                                    {
                                                                        "variableName": "zombieCount",
                                                                        "function": "getVariable"
                                                                    }
                                                                ],
                                                                "function": "calculate"
                                                            },
                                                            {
                                                                "items": [
                                                                    {
                                                                        "operator": "*"
                                                                    },
                                                                    {
                                                                        "variableName": "humanCount",
                                                                        "function": "getVariable"
                                                                    },
                                                                    2.5
                                                                ],
                                                                "function": "calculate"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            "entity": {
                                                "function": "getOwner",
                                                "entity": {
                                                    "function": "selectedUnit"
                                                }
                                            }
                                        }
                                    ],
                                    "conditions": [
                                        {
                                            "operandType": "playerType",
                                            "operator": "=="
                                        },
                                        {
                                            "function": "playerTypeOfPlayer",
                                            "player": {
                                                "function": "getOwner",
                                                "entity": {
                                                    "function": "selectedUnit"
                                                }
                                            }
                                        },
                                        "w1NiT3YV0e"
                                    ],
                                    "type": "condition"
                                }
                            ],
                            "else": [],
                            "comment": "give points to units"
                        },
                        {
                            "type": "setVariable",
                            "value": {
                                "function": "selectedUnit"
                            },
                            "variableName": "tempUnit",
                            "comment": ""
                        },
                        {
                            "scriptName": "updateSizeAndSpeed",
                            "type": "runScript"
                        },
                        {
                            "type": "condition",
                            "conditions": [
                                {
                                    "operator": ">",
                                    "operandType": "number"
                                },
                                {
                                    "function": "getEntityAttribute",
                                    "attribute": "JNibtUdrRY",
                                    "entity": {
                                        "function": "selectedUnit"
                                    }
                                },
                                1
                            ],
                            "then": [
                                {
                                    "value": {
                                        "items": [
                                            {
                                                "operator": "-"
                                            },
                                            {
                                                "entity": {
                                                    "function": "selectedUnit"
                                                },
                                                "attribute": "JNibtUdrRY",
                                                "function": "getEntityAttribute"
                                            },
                                            1
                                        ],
                                        "function": "calculate"
                                    },
                                    "entity": {
                                        "function": "selectedUnit"
                                    },
                                    "attribute": "JNibtUdrRY",
                                    "type": "setEntityAttribute"
                                }
                            ],
                            "else": []
                        }
                    ],
                    "type": "forAllUnits",
                    "unitGroup": {
                        "function": "allUnits"
                    }
                },
                {
                    "value": {
                        "textB": {
                            "textB": " Zombies</span>",
                            "textA": {
                                "textB": {
                                    "variableName": "zombieCount",
                                    "function": "getVariable"
                                },
                                "textA": " Humans<br/> <span class='text-danger'> ",
                                "function": "concat"
                            },
                            "function": "concat"
                        },
                        "textA": {
                            "variableName": "humanCount",
                            "function": "getVariable"
                        },
                        "function": "concat"
                    },
                    "target": "scoreboard",
                    "type": "updateUiTextForEveryone",
                    "disabled": false
                },
                {
                    "else": [],
                    "then": [
                        {
                            "scriptName": "makeHumansSick",
                            "type": "runScript"
                        }
                    ],
                    "conditions": [
                        {
                            "operandType": "boolean",
                            "operator": "AND"
                        },
                        [
                            {
                                "operandType": "number",
                                "operator": "=="
                            },
                            {
                                "variableName": "timeLeft",
                                "function": "getVariable"
                            },
                            {
                                "variableName": "@timeSick",
                                "function": "getVariable"
                            }
                        ],
                        [
                            {
                                "operandType": "string",
                                "operator": "=="
                            },
                            {
                                "variableName": "state",
                                "function": "getVariable"
                            },
                            "preoutbreak"
                        ]
                    ],
                    "type": "condition"
                },
                {
                    "else": [],
                    "then": [
                        {
                            "comment": "",
                            "else": [
                                {
                                    "else": [
                                        {
                                            "else": [],
                                            "then": [
                                                {
                                                    "value": {
                                                        "function": "getVariable",
                                                        "variableName": "@timePreoutbreak"
                                                    },
                                                    "variableName": "timeLeft",
                                                    "type": "setVariable"
                                                },
                                                {
                                                    "value": "preoutbreak",
                                                    "variableName": "state",
                                                    "type": "setVariable",
                                                    "comment": ""
                                                },
                                                {
                                                    "scriptName": "reset",
                                                    "type": "runScript"
                                                }
                                            ],
                                            "conditions": [
                                                {
                                                    "operandType": "string",
                                                    "operator": "=="
                                                },
                                                {
                                                    "variableName": "state",
                                                    "function": "getVariable"
                                                },
                                                "gameover"
                                            ],
                                            "type": "condition"
                                        }
                                    ],
                                    "then": [
                                        {
                                            "scriptName": "gameOver",
                                            "type": "runScript"
                                        }
                                    ],
                                    "conditions": [
                                        {
                                            "operandType": "string",
                                            "operator": "=="
                                        },
                                        {
                                            "variableName": "state",
                                            "function": "getVariable"
                                        },
                                        "postoutbreak"
                                    ],
                                    "type": "condition"
                                }
                            ],
                            "then": [
                                {
                                    "scriptName": "outbreak",
                                    "type": "runScript"
                                }
                            ],
                            "conditions": [
                                {
                                    "operandType": "string",
                                    "operator": "=="
                                },
                                {
                                    "variableName": "state",
                                    "function": "getVariable"
                                },
                                "preoutbreak"
                            ],
                            "type": "condition"
                        }
                    ],
                    "conditions": [
                        {
                            "operandType": "number",
                            "operator": "<="
                        },
                        {
                            "variableName": "timeLeft",
                            "function": "getVariable"
                        },
                        0
                    ],
                    "type": "condition",
                    "comment": "change state"
                },
                {
                    "disabled": true,
                    "comment": "",
                    "type": "condition",
                    "conditions": [
                        {
                            "operator": "==",
                            "operandType": "string"
                        },
                        {
                            "function": "getVariable",
                            "variableName": "state"
                        },
                        "gameover"
                    ],
                    "then": [
                        {
                            "else": [],
                            "then": [
                                {
                                    "itemGroup": {
                                        "function": "allItemsDroppedOnGround"
                                    },
                                    "actions": [
                                        {
                                            "type": "destroyEntity",
                                            "entity": {
                                                "function": "selectedItem"
                                            }
                                        }
                                    ],
                                    "type": "forAllItems"
                                }
                            ],
                            "conditions": [
                                {
                                    "operandType": "number",
                                    "operator": "<"
                                },
                                {
                                    "variableName": "timeLeft",
                                    "function": "getVariable"
                                },
                                5
                            ],
                            "type": "condition"
                        }
                    ],
                    "else": []
                }
            ],
            "conditions": [],
            "triggers": [
                {
                    "type": "secondTick"
                }
            ],
            "name": "every second"
        },
        "countUnits": {
            "name": "count units",
            "triggers": [],
            "conditions": [],
            "actions": [
                {
                    "type": "setVariable",
                    "variableName": "humanCount",
                    "value": 0,
                    "vars": []
                },
                {
                    "type": "setVariable",
                    "variableName": "zombieCount",
                    "value": 0,
                    "vars": []
                },
                {
                    "unitGroup": {
                        "function": "allUnits",
                        "vars": [
                            {
                                "source": "forAllUnits",
                                "id": "selectedUnit"
                            },
                            {
                                "source": "forAllUnits",
                                "id": "getSelectedUnit"
                            }
                        ]
                    },
                    "type": "forAllUnits",
                    "actions": [
                        {
                            "type": "condition",
                            "conditions": [
                                {
                                    "operator": "==",
                                    "operandType": "playerType"
                                },
                                {
                                    "player": {
                                        "entity": {
                                            "function": "selectedUnit",
                                            "vars": [
                                                {
                                                    "source": "forAllUnits",
                                                    "id": "selectedUnit"
                                                },
                                                {
                                                    "source": "forAllUnits",
                                                    "id": "getSelectedUnit"
                                                }
                                            ]
                                        },
                                        "function": "getOwner",
                                        "vars": [
                                            {
                                                "source": "forAllUnits",
                                                "id": "selectedUnit"
                                            },
                                            {
                                                "source": "forAllUnits",
                                                "id": "getSelectedUnit"
                                            }
                                        ]
                                    },
                                    "function": "playerTypeOfPlayer",
                                    "vars": [
                                        {
                                            "source": "forAllUnits",
                                            "id": "selectedUnit"
                                        },
                                        {
                                            "source": "forAllUnits",
                                            "id": "getSelectedUnit"
                                        }
                                    ]
                                },
                                "w1NiT3YV0e"
                            ],
                            "then": [
                                {
                                    "type": "setVariable",
                                    "variableName": "humanCount",
                                    "value": {
                                        "function": "calculate",
                                        "items": [
                                            "+",
                                            {
                                                "function": "getVariable",
                                                "variableName": "humanCount"
                                            },
                                            1
                                        ],
                                        "vars": [
                                            {
                                                "source": "forAllUnits",
                                                "id": "selectedUnit"
                                            },
                                            {
                                                "source": "forAllUnits",
                                                "id": "getSelectedUnit"
                                            }
                                        ]
                                    },
                                    "vars": [
                                        {
                                            "source": "forAllUnits",
                                            "id": "selectedUnit"
                                        },
                                        {
                                            "source": "forAllUnits",
                                            "id": "getSelectedUnit"
                                        }
                                    ]
                                },
                                {
                                    "entity": {
                                        "entity": {
                                            "function": "selectedUnit",
                                            "vars": [
                                                {
                                                    "source": "forAllUnits",
                                                    "id": "selectedUnit"
                                                },
                                                {
                                                    "source": "forAllUnits",
                                                    "id": "getSelectedUnit"
                                                }
                                            ]
                                        },
                                        "function": "getOwner",
                                        "vars": [
                                            {
                                                "source": "forAllUnits",
                                                "id": "selectedUnit"
                                            },
                                            {
                                                "source": "forAllUnits",
                                                "id": "getSelectedUnit"
                                            }
                                        ]
                                    },
                                    "value": {
                                        "variableName": "timerMessage",
                                        "function": "getVariable",
                                        "vars": [
                                            {
                                                "source": "forAllUnits",
                                                "id": "selectedUnit"
                                            },
                                            {
                                                "source": "forAllUnits",
                                                "id": "getSelectedUnit"
                                            }
                                        ]
                                    },
                                    "target": "top",
                                    "type": "updateUiTextForPlayer",
                                    "vars": [
                                        {
                                            "source": "forAllUnits",
                                            "id": "selectedUnit"
                                        },
                                        {
                                            "source": "forAllUnits",
                                            "id": "getSelectedUnit"
                                        }
                                    ]
                                }
                            ],
                            "else": [
                                {
                                    "type": "condition",
                                    "conditions": [
                                        {
                                            "operator": "==",
                                            "operandType": "playerType"
                                        },
                                        {
                                            "player": {
                                                "entity": {
                                                    "function": "selectedUnit",
                                                    "vars": [
                                                        {
                                                            "source": "forAllUnits",
                                                            "id": "selectedUnit"
                                                        },
                                                        {
                                                            "source": "forAllUnits",
                                                            "id": "getSelectedUnit"
                                                        }
                                                    ]
                                                },
                                                "function": "getOwner",
                                                "vars": [
                                                    {
                                                        "source": "forAllUnits",
                                                        "id": "selectedUnit"
                                                    },
                                                    {
                                                        "source": "forAllUnits",
                                                        "id": "getSelectedUnit"
                                                    }
                                                ]
                                            },
                                            "function": "playerTypeOfPlayer",
                                            "vars": [
                                                {
                                                    "source": "forAllUnits",
                                                    "id": "selectedUnit"
                                                },
                                                {
                                                    "source": "forAllUnits",
                                                    "id": "getSelectedUnit"
                                                }
                                            ]
                                        },
                                        "X90ySSRC3b"
                                    ],
                                    "then": [
                                        {
                                            "type": "setVariable",
                                            "variableName": "zombieCount",
                                            "value": {
                                                "function": "calculate",
                                                "items": [
                                                    "+",
                                                    {
                                                        "function": "getVariable",
                                                        "variableName": "zombieCount"
                                                    },
                                                    1
                                                ],
                                                "vars": [
                                                    {
                                                        "source": "forAllUnits",
                                                        "id": "selectedUnit"
                                                    },
                                                    {
                                                        "source": "forAllUnits",
                                                        "id": "getSelectedUnit"
                                                    }
                                                ]
                                            },
                                            "vars": [
                                                {
                                                    "source": "forAllUnits",
                                                    "id": "selectedUnit"
                                                },
                                                {
                                                    "source": "forAllUnits",
                                                    "id": "getSelectedUnit"
                                                }
                                            ]
                                        },
                                        {
                                            "entity": {
                                                "entity": {
                                                    "function": "selectedUnit",
                                                    "vars": [
                                                        {
                                                            "source": "forAllUnits",
                                                            "id": "selectedUnit"
                                                        },
                                                        {
                                                            "source": "forAllUnits",
                                                            "id": "getSelectedUnit"
                                                        }
                                                    ]
                                                },
                                                "function": "getOwner",
                                                "vars": [
                                                    {
                                                        "source": "forAllUnits",
                                                        "id": "selectedUnit"
                                                    },
                                                    {
                                                        "source": "forAllUnits",
                                                        "id": "getSelectedUnit"
                                                    }
                                                ]
                                            },
                                            "value": {
                                                "variableName": "zombieTimerMessage",
                                                "function": "getVariable",
                                                "vars": [
                                                    {
                                                        "source": "forAllUnits",
                                                        "id": "selectedUnit"
                                                    },
                                                    {
                                                        "source": "forAllUnits",
                                                        "id": "getSelectedUnit"
                                                    }
                                                ]
                                            },
                                            "target": "top",
                                            "type": "updateUiTextForPlayer",
                                            "vars": [
                                                {
                                                    "source": "forAllUnits",
                                                    "id": "selectedUnit"
                                                },
                                                {
                                                    "source": "forAllUnits",
                                                    "id": "getSelectedUnit"
                                                }
                                            ]
                                        }
                                    ],
                                    "else": [],
                                    "vars": [
                                        {
                                            "source": "forAllUnits",
                                            "id": "selectedUnit"
                                        },
                                        {
                                            "source": "forAllUnits",
                                            "id": "getSelectedUnit"
                                        }
                                    ]
                                }
                            ],
                            "vars": [
                                {
                                    "source": "forAllUnits",
                                    "id": "selectedUnit"
                                },
                                {
                                    "source": "forAllUnits",
                                    "id": "getSelectedUnit"
                                }
                            ]
                        }
                    ],
                    "vars": [
                        {
                            "source": "forAllUnits",
                            "id": "selectedUnit"
                        },
                        {
                            "source": "forAllUnits",
                            "id": "getSelectedUnit"
                        }
                    ]
                },
                {
                    "type": "condition",
                    "conditions": [
                        {
                            "operator": "<=",
                            "operandType": "number"
                        },
                        {
                            "function": "getVariable",
                            "variableName": "humanCount",
                            "vars": []
                        },
                        0
                    ],
                    "then": [
                        {
                            "type": "runScript",
                            "scriptName": "gameOver",
                            "vars": []
                        }
                    ],
                    "vars": []
                }
            ],
            "key": "countUnits",
            "parent": "yssVZ9bXmK",
            "order": 0
        },
        "zombieTouch": {
            "name": "contact (zombie touches human)",
            "triggers": [
                {
                    "type": "unitTouchesUnit"
                }
            ],
            "conditions": [
                {
                    "operator": "==",
                    "operandType": "string"
                },
                {
                    "function": "getVariable",
                    "variableName": "state"
                },
                "postoutbreak"
            ],
            "actions": [
                {
                    "else": [],
                    "then": [
                        {
                            "type": "condition",
                            "conditions": [
                                {
                                    "operandType": "playerType",
                                    "operator": "=="
                                },
                                {
                                    "function": "playerTypeOfPlayer",
                                    "player": {
                                        "function": "getOwner",
                                        "entity": {
                                            "function": "getLastTouchingUnit"
                                        }
                                    }
                                },
                                "X90ySSRC3b"
                            ],
                            "then": [
                                {
                                    "type": "condition",
                                    "conditions": [
                                        {
                                            "operator": "==",
                                            "operandType": "playerType"
                                        },
                                        {
                                            "function": "playerTypeOfPlayer",
                                            "player": {
                                                "function": "getOwner",
                                                "entity": {
                                                    "function": "getLastTouchedUnit"
                                                }
                                            }
                                        },
                                        "w1NiT3YV0e"
                                    ],
                                    "then": [
                                        {
                                            "entity": {
                                                "function": "getLastTouchedUnit"
                                            },
                                            "type": "dropAllItems"
                                        },
                                        {
                                            "unitType": "zombie",
                                            "type": "changeUnitType",
                                            "entity": {
                                                "function": "getLastTouchedUnit"
                                            }
                                        },
                                        {
                                            "entity": {
                                                "entity": {
                                                    "function": "getLastTouchedUnit"
                                                },
                                                "function": "getOwner"
                                            },
                                            "playerType": "X90ySSRC3b",
                                            "type": "assignPlayerType"
                                        },
                                        {
                                            "comment": "Give bonus points to zombie infector",
                                            "entity": {
                                                "entity": {
                                                    "function": "getLastTouchingUnit"
                                                },
                                                "function": "getOwner"
                                            },
                                            "value": {
                                                "items": [
                                                    "+",
                                                    {
                                                        "function": "calculate",
                                                        "items": [
                                                            "+",
                                                            {
                                                                "function": "getPlayerAttribute",
                                                                "attribute": "n5JEoENeGg",
                                                                "entity": {
                                                                    "function": "getOwner",
                                                                    "entity": {
                                                                        "function": "getLastTouchingUnit"
                                                                    }
                                                                }
                                                            },
                                                            500
                                                        ]
                                                    },
                                                    {
                                                        "items": [
                                                            {
                                                                "operator": "*"
                                                            },
                                                            0.6,
                                                            {
                                                                "entity": {
                                                                    "entity": {
                                                                        "function": "getLastTouchedUnit"
                                                                    },
                                                                    "function": "getOwner"
                                                                },
                                                                "attribute": "n5JEoENeGg",
                                                                "function": "getPlayerAttribute"
                                                            }
                                                        ],
                                                        "function": "calculate"
                                                    }
                                                ],
                                                "function": "calculate"
                                            },
                                            "attribute": "n5JEoENeGg",
                                            "type": "setPlayerAttribute"
                                        },
                                        {
                                            "entity": {
                                                "entity": {
                                                    "function": "getLastTouchedUnit"
                                                },
                                                "function": "getOwner"
                                            },
                                            "value": {
                                                "items": [
                                                    {
                                                        "operator": "*"
                                                    },
                                                    {
                                                        "entity": {
                                                            "entity": {
                                                                "function": "getLastTouchedUnit"
                                                            },
                                                            "function": "getOwner"
                                                        },
                                                        "attribute": "n5JEoENeGg",
                                                        "function": "getPlayerAttribute"
                                                    },
                                                    0.35
                                                ],
                                                "function": "calculate"
                                            },
                                            "attribute": "n5JEoENeGg",
                                            "type": "setPlayerAttribute",
                                            "comment": "Take points away from human victim ;-;"
                                        },
                                        {
                                            "comment": "",
                                            "value": 1,
                                            "variable": {
                                                "variable": {
                                                    "key": "progression",
                                                    "entity": "X90ySSRC3b",
                                                    "dataType": "number",
                                                    "text": "progression"
                                                },
                                                "function": "getPlayerVariable"
                                            },
                                            "player": {
                                                "entity": {
                                                    "function": "getLastTouchedUnit"
                                                },
                                                "function": "getOwner"
                                            },
                                            "type": "setPlayerVariable"
                                        },
                                        {
                                            "comment": "",
                                            "value": 2,
                                            "variable": {
                                                "variable": {
                                                    "key": "progression",
                                                    "entity": "X90ySSRC3b",
                                                    "dataType": "number",
                                                    "text": "progression"
                                                },
                                                "function": "getPlayerVariable"
                                            },
                                            "player": {
                                                "entity": {
                                                    "function": "getLastTouchingUnit"
                                                },
                                                "function": "getOwner"
                                            },
                                            "type": "setPlayerVariable"
                                        },
                                        {
                                            "type": "setPlayerAttribute",
                                            "attribute": "TpL30eN1aR",
                                            "entity": {
                                                "function": "getOwner",
                                                "entity": {
                                                    "function": "getLastTouchingUnit"
                                                }
                                            },
                                            "value": {
                                                "function": "calculate",
                                                "items": [
                                                    "+",
                                                    {
                                                        "function": "getPlayerAttribute",
                                                        "attribute": "TpL30eN1aR",
                                                        "entity": {
                                                            "function": "getOwner",
                                                            "entity": {
                                                                "function": "getLastTouchingUnit"
                                                            }
                                                        }
                                                    },
                                                    1
                                                ]
                                            }
                                        },
                                        {
                                            "type": "condition",
                                            "conditions": [
                                                {
                                                    "operator": ">",
                                                    "operandType": "number"
                                                },
                                                {
                                                    "function": "getEntityAttribute",
                                                    "attribute": "TpL30eN1aR",
                                                    "entity": {
                                                        "function": "getLastTouchingUnit"
                                                    }
                                                },
                                                1
                                            ],
                                            "then": [
                                                {
                                                    "type": "condition",
                                                    "conditions": [
                                                        {
                                                            "operator": "==",
                                                            "operandType": "number"
                                                        },
                                                        {
                                                            "function": "getPlayerAttribute",
                                                            "attribute": "TpL30eN1aR",
                                                            "entity": {
                                                                "function": "getOwner",
                                                                "entity": {
                                                                    "function": "getLastTouchingUnit"
                                                                }
                                                            }
                                                        },
                                                        2
                                                    ],
                                                    "then": [
                                                        {
                                                            "type": "showUiTextForEveryone",
                                                            "target": "center-lg"
                                                        },
                                                        {
                                                            "value": {
                                                                "textB": "<span class='text-danger'>'s got a DOUBLE KILL </span>",
                                                                "textA": {
                                                                    "entity": {
                                                                        "entity": {
                                                                            "function": "getLastTouchingUnit"
                                                                        },
                                                                        "function": "getOwner"
                                                                    },
                                                                    "function": "getPlayerName"
                                                                },
                                                                "function": "concat"
                                                            },
                                                            "target": "center-lg",
                                                            "type": "updateUiTextForEveryone"
                                                        },
                                                        {
                                                            "actions": [
                                                                {
                                                                    "type": "hideUiTextForEveryone",
                                                                    "target": "center-lg"
                                                                }
                                                            ],
                                                            "duration": 4000,
                                                            "type": "setTimeOut"
                                                        }
                                                    ],
                                                    "else": []
                                                },
                                                {
                                                    "type": "condition",
                                                    "conditions": [
                                                        {
                                                            "operandType": "number",
                                                            "operator": ">="
                                                        },
                                                        {
                                                            "function": "getPlayerAttribute",
                                                            "attribute": "TpL30eN1aR",
                                                            "entity": {
                                                                "function": "getOwner",
                                                                "entity": {
                                                                    "function": "getLastTouchingUnit"
                                                                }
                                                            }
                                                        },
                                                        5
                                                    ],
                                                    "then": [
                                                        {
                                                            "value": {
                                                                "textB": "<span class='text-danger'> IS THE RAPTURE!!!!! </span>",
                                                                "textA": {
                                                                    "entity": {
                                                                        "entity": {
                                                                            "function": "getLastTouchingUnit"
                                                                        },
                                                                        "function": "getOwner"
                                                                    },
                                                                    "function": "getPlayerName"
                                                                },
                                                                "function": "concat"
                                                            },
                                                            "target": "center-lg",
                                                            "type": "updateUiTextForEveryone"
                                                        },
                                                        {
                                                            "type": "showUiTextForEveryone",
                                                            "target": "center-lg"
                                                        },
                                                        {
                                                            "actions": [
                                                                {
                                                                    "type": "hideUiTextForEveryone",
                                                                    "target": "center-lg"
                                                                }
                                                            ],
                                                            "duration": 4000,
                                                            "type": "setTimeOut"
                                                        }
                                                    ],
                                                    "else": []
                                                },
                                                {
                                                    "else": [],
                                                    "then": [
                                                        {
                                                            "type": "updateUiTextForEveryone",
                                                            "target": "center-lg",
                                                            "value": {
                                                                "function": "concat",
                                                                "textA": {
                                                                    "function": "getPlayerName",
                                                                    "entity": {
                                                                        "function": "getOwner",
                                                                        "entity": {
                                                                            "function": "getLastTouchingUnit"
                                                                        }
                                                                    }
                                                                },
                                                                "textB": "<span class='text-danger'> IS THE PLAGUE!!! </span>"
                                                            }
                                                        },
                                                        {
                                                            "target": "center-lg",
                                                            "type": "showUiTextForEveryone"
                                                        },
                                                        {
                                                            "type": "setTimeOut",
                                                            "duration": 4000,
                                                            "actions": [
                                                                {
                                                                    "target": "center-lg",
                                                                    "type": "hideUiTextForEveryone"
                                                                }
                                                            ]
                                                        }
                                                    ],
                                                    "conditions": [
                                                        {
                                                            "operandType": "number",
                                                            "operator": "=="
                                                        },
                                                        {
                                                            "entity": {
                                                                "entity": {
                                                                    "function": "getLastTouchingUnit"
                                                                },
                                                                "function": "getOwner"
                                                            },
                                                            "attribute": "TpL30eN1aR",
                                                            "function": "getPlayerAttribute"
                                                        },
                                                        4
                                                    ],
                                                    "type": "condition"
                                                },
                                                {
                                                    "else": [],
                                                    "then": [
                                                        {
                                                            "type": "updateUiTextForEveryone",
                                                            "target": "center-lg",
                                                            "value": {
                                                                "function": "concat",
                                                                "textA": {
                                                                    "function": "getPlayerName",
                                                                    "entity": {
                                                                        "function": "getOwner",
                                                                        "entity": {
                                                                            "function": "getLastTouchingUnit"
                                                                        }
                                                                    }
                                                                },
                                                                "textB": "<span class='text-danger'>'s got a TRIPLE KILL </span>"
                                                            }
                                                        },
                                                        {
                                                            "target": "center-lg",
                                                            "type": "showUiTextForEveryone"
                                                        },
                                                        {
                                                            "type": "setTimeOut",
                                                            "duration": 4000,
                                                            "actions": [
                                                                {
                                                                    "target": "center-lg",
                                                                    "type": "hideUiTextForEveryone"
                                                                }
                                                            ]
                                                        }
                                                    ],
                                                    "conditions": [
                                                        {
                                                            "operandType": "number",
                                                            "operator": "=="
                                                        },
                                                        {
                                                            "entity": {
                                                                "entity": {
                                                                    "function": "getLastTouchingUnit"
                                                                },
                                                                "function": "getOwner"
                                                            },
                                                            "attribute": "TpL30eN1aR",
                                                            "function": "getPlayerAttribute"
                                                        },
                                                        3
                                                    ],
                                                    "type": "condition"
                                                }
                                            ],
                                            "else": []
                                        },
                                        {
                                            "type": "condition",
                                            "conditions": [
                                                {
                                                    "operandType": "number",
                                                    "operator": ">"
                                                },
                                                {
                                                    "function": "getVariable",
                                                    "variableName": "timeLeft"
                                                },
                                                50
                                            ],
                                            "then": [
                                                {
                                                    "player": {
                                                        "entity": {
                                                            "function": "getLastTouchedUnit"
                                                        },
                                                        "function": "getOwner"
                                                    },
                                                    "message": "You are a zombie now! If you're stuck, press [Z] to teleport to spawn position",
                                                    "type": "sendChatMessageToPlayer"
                                                }
                                            ],
                                            "else": []
                                        }
                                    ],
                                    "else": []
                                }
                            ],
                            "else": []
                        }
                    ],
                    "conditions": [
                        {
                            "operandType": "string",
                            "operator": "=="
                        },
                        {
                            "variableName": "state",
                            "function": "getVariable"
                        },
                        "postoutbreak"
                    ],
                    "type": "condition"
                }
            ],
            "key": "zombieTouch",
            "parent": "yNLTQxb2xL",
            "order": 0
        },
        "updateSizeAndSpeed": {
            "name": "update tempUnit's size & speed multiplier",
            "triggers": [],
            "conditions": [],
            "actions": [
                {
                    "vars": [],
                    "scale": {
                        "vars": [],
                        "items": [
                            "+",
                            1,
                            {
                                "items": [
                                    {
                                        "operator": "/"
                                    },
                                    {
                                        "entity": {
                                            "entity": {
                                                "variableName": "tempUnit",
                                                "function": "getVariable"
                                            },
                                            "function": "getOwner"
                                        },
                                        "attribute": "n5JEoENeGg",
                                        "function": "getPlayerAttribute"
                                    },
                                    7500
                                ],
                                "function": "calculate"
                            }
                        ],
                        "function": "calculate"
                    },
                    "entity": {
                        "vars": [],
                        "variableName": "tempUnit",
                        "function": "getVariable"
                    },
                    "type": "changeScaleOfEntitySprite"
                },
                {
                    "vars": [],
                    "type": "setPlayerAttribute",
                    "attribute": "1QtjsHQebg",
                    "entity": {
                        "vars": [],
                        "function": "getOwner",
                        "entity": {
                            "vars": [],
                            "function": "getVariable",
                            "variableName": "tempUnit"
                        }
                    },
                    "value": {
                        "vars": [],
                        "items": [
                            {
                                "operator": "+"
                            },
                            1,
                            {
                                "num2": {
                                    "items": [
                                        {
                                            "operator": "/"
                                        },
                                        {
                                            "entity": {
                                                "entity": {
                                                    "variableName": "tempUnit",
                                                    "function": "getVariable"
                                                },
                                                "function": "getOwner"
                                            },
                                            "attribute": "n5JEoENeGg",
                                            "function": "getPlayerAttribute"
                                        },
                                        25000
                                    ],
                                    "function": "calculate"
                                },
                                "num1": 2,
                                "function": "getMin"
                            }
                        ],
                        "function": "calculate"
                    }
                }
            ],
            "key": "updateSizeAndSpeed",
            "parent": "yssVZ9bXmK",
            "order": 1
        },
        "outbreak": {
            "name": "outbreak",
            "triggers": [],
            "conditions": [],
            "actions": [
                {
                    "type": "setVariable",
                    "variableName": "timeLeft",
                    "value": {
                        "variableName": "@timePostoutbreak",
                        "function": "getVariable"
                    }
                },
                {
                    "type": "setVariable",
                    "variableName": "state",
                    "value": "postoutbreak"
                },
                {
                    "type": "forAllUnits",
                    "actions": [
                        {
                            "type": "condition",
                            "conditions": [
                                {
                                    "operator": "==",
                                    "operandType": "unitType"
                                },
                                {
                                    "entity": {
                                        "function": "selectedUnit"
                                    },
                                    "function": "getUnitTypeOfUnit"
                                },
                                "sick"
                            ],
                            "then": [
                                {
                                    "unitType": "zombie_king",
                                    "type": "changeUnitType",
                                    "entity": {
                                        "function": "selectedUnit"
                                    }
                                },
                                {
                                    "entity": {
                                        "entity": {
                                            "function": "selectedUnit"
                                        },
                                        "function": "getOwner"
                                    },
                                    "playerType": "X90ySSRC3b",
                                    "type": "assignPlayerType"
                                },
                                {
                                    "entity": {
                                        "function": "selectedUnit"
                                    },
                                    "type": "dropAllItems"
                                },
                                {
                                    "player": {
                                        "entity": {
                                            "function": "getLastTouchedUnit"
                                        },
                                        "function": "getOwner"
                                    },
                                    "message": "You are a zombie now! If you're stuck, press [Z] to teleport to spawn position",
                                    "type": "sendChatMessageToPlayer"
                                }
                            ],
                            "else": []
                        }
                    ],
                    "unitGroup": {
                        "function": "allUnits"
                    }
                }
            ],
            "key": "outbreak",
            "parent": "lXgsTw4yA9",
            "order": 2
        },
        "makeHumansSick": {
            "order": 1,
            "parent": "lXgsTw4yA9",
            "key": "makeHumansSick",
            "actions": [
                {
                    "value": 0,
                    "variableName": "numberOfSickUnits",
                    "type": "setVariable"
                },
                {
                    "value": 0,
                    "variableName": "numberOfUnits",
                    "type": "setVariable"
                },
                {
                    "actions": [
                        {
                            "type": "condition",
                            "conditions": [
                                {
                                    "operator": "==",
                                    "operandType": "playerType"
                                },
                                {
                                    "function": "playerTypeOfPlayer",
                                    "player": {
                                        "function": "getOwner",
                                        "entity": {
                                            "function": "selectedUnit"
                                        }
                                    }
                                },
                                "w1NiT3YV0e"
                            ],
                            "then": [
                                {
                                    "type": "setVariable",
                                    "variableName": "numberOfUnits",
                                    "value": {
                                        "function": "calculate",
                                        "items": [
                                            "+",
                                            {
                                                "function": "getVariable",
                                                "variableName": "numberOfUnits"
                                            },
                                            1
                                        ]
                                    }
                                }
                            ]
                        }
                    ],
                    "type": "forAllUnits",
                    "unitGroup": {
                        "function": "allUnits"
                    }
                },
                {
                    "actions": [
                        {
                            "value": {
                                "max": {
                                    "items": [
                                        "-",
                                        {
                                            "variableName": "humanCount",
                                            "function": "getVariable"
                                        },
                                        1
                                    ],
                                    "function": "calculate"
                                },
                                "min": 0,
                                "function": "getRandomNumberBetween"
                            },
                            "variableName": "victimIndex",
                            "type": "setVariable"
                        },
                        {
                            "value": 0,
                            "variableName": "i",
                            "type": "setVariable"
                        },
                        {
                            "unitGroup": {
                                "function": "allUnits"
                            },
                            "actions": [
                                {
                                    "then": [
                                        {
                                            "else": [],
                                            "then": [
                                                {
                                                    "type": "changeUnitType",
                                                    "unitType": "sick",
                                                    "entity": {
                                                        "function": "selectedUnit"
                                                    }
                                                },
                                                {
                                                    "type": "assignPlayerType",
                                                    "entity": {
                                                        "function": "getOwner",
                                                        "entity": {
                                                            "function": "selectedUnit"
                                                        }
                                                    },
                                                    "playerType": "X90ySSRC3b"
                                                },
                                                {
                                                    "value": {
                                                        "items": [
                                                            "+",
                                                            {
                                                                "variableName": "numberOfSickUnits",
                                                                "function": "getVariable"
                                                            },
                                                            1
                                                        ],
                                                        "function": "calculate"
                                                    },
                                                    "variableName": "numberOfSickUnits",
                                                    "type": "setVariable"
                                                },
                                                {
                                                    "type": "break"
                                                }
                                            ],
                                            "conditions": [
                                                {
                                                    "operandType": "boolean",
                                                    "operator": "AND"
                                                },
                                                [
                                                    {
                                                        "operandType": "number",
                                                        "operator": "=="
                                                    },
                                                    {
                                                        "variableName": "i",
                                                        "function": "getVariable"
                                                    },
                                                    {
                                                        "variableName": "victimIndex",
                                                        "function": "getVariable"
                                                    }
                                                ],
                                                [
                                                    {
                                                        "operandType": "number",
                                                        "operator": ">"
                                                    },
                                                    {
                                                        "max": {
                                                            "items": [
                                                                {
                                                                    "operator": "+"
                                                                },
                                                                {
                                                                    "entity": {
                                                                        "function": "selectedUnit"
                                                                    },
                                                                    "attribute": "K2mih60v2P",
                                                                    "function": "entityAttributeMax"
                                                                },
                                                                2
                                                            ],
                                                            "function": "calculate"
                                                        },
                                                        "min": 0,
                                                        "function": "getRandomNumberBetween"
                                                    },
                                                    {
                                                        "entity": {
                                                            "function": "selectedUnit"
                                                        },
                                                        "function": "getEntityAttribute",
                                                        "attribute": "K2mih60v2P"
                                                    }
                                                ]
                                            ],
                                            "type": "condition"
                                        },
                                        {
                                            "value": {
                                                "items": [
                                                    "+",
                                                    {
                                                        "variableName": "i",
                                                        "function": "getVariable"
                                                    },
                                                    1
                                                ],
                                                "function": "calculate"
                                            },
                                            "variableName": "i",
                                            "type": "setVariable"
                                        }
                                    ],
                                    "conditions": [
                                        {
                                            "operandType": "playerType",
                                            "operator": "=="
                                        },
                                        {
                                            "player": {
                                                "entity": {
                                                    "function": "selectedUnit"
                                                },
                                                "function": "getOwner"
                                            },
                                            "function": "playerTypeOfPlayer"
                                        },
                                        "w1NiT3YV0e"
                                    ],
                                    "type": "condition"
                                }
                            ],
                            "type": "forAllUnits"
                        }
                    ],
                    "conditions": [
                        {
                            "operandType": "number",
                            "operator": "<"
                        },
                        {
                            "variableName": "numberOfSickUnits",
                            "function": "getVariable"
                        },
                        {
                            "items": [
                                "*",
                                {
                                    "variableName": "numberOfUnits",
                                    "function": "getVariable"
                                },
                                {
                                    "variableName": "@outbreakRatio",
                                    "function": "getVariable"
                                }
                            ],
                            "function": "calculate"
                        }
                    ],
                    "type": "while"
                }
            ],
            "conditions": [],
            "triggers": [],
            "name": "make humans sick"
        },
        "gameOver": {
            "name": "game over",
            "triggers": [],
            "conditions": [
                {
                    "operator": "!=",
                    "operandType": "string"
                },
                {
                    "function": "getVariable",
                    "variableName": "state"
                },
                "gameover"
            ],
            "actions": [
                {
                    "vars": [],
                    "else": [],
                    "then": [
                        {
                            "vars": [],
                            "type": "setVariable",
                            "variableName": "timeLeft",
                            "value": {
                                "vars": [],
                                "variableName": "@timeGameover",
                                "function": "getVariable"
                            }
                        },
                        {
                            "vars": [],
                            "type": "setVariable",
                            "variableName": "state",
                            "value": "gameover"
                        },
                        {
                            "vars": [],
                            "type": "showUiTextForEveryone",
                            "target": "center-lg"
                        },
                        {
                            "vars": [],
                            "type": "condition",
                            "conditions": [
                                {
                                    "operator": "<=",
                                    "operandType": "number"
                                },
                                {
                                    "vars": [],
                                    "function": "getVariable",
                                    "variableName": "humanCount"
                                },
                                0
                            ],
                            "else": [
                                {
                                    "vars": [],
                                    "value": {
                                        "vars": [],
                                        "function": "concat",
                                        "textA": "<span class='text-secondary'> Humans Win </span>",
                                        "textB": "<br />Everyone will receive 500 points"
                                    },
                                    "target": "center-lg",
                                    "type": "updateUiTextForEveryone"
                                },
                                {
                                    "vars": [
                                        {
                                            "source": "forAllUnits",
                                            "id": "selectedUnit"
                                        },
                                        {
                                            "source": "forAllUnits",
                                            "id": "getSelectedUnit"
                                        }
                                    ],
                                    "unitGroup": {
                                        "vars": [
                                            {
                                                "source": "forAllUnits",
                                                "id": "selectedUnit"
                                            },
                                            {
                                                "source": "forAllUnits",
                                                "id": "getSelectedUnit"
                                            }
                                        ],
                                        "function": "allUnits"
                                    },
                                    "type": "forAllUnits",
                                    "actions": [
                                        {
                                            "vars": [
                                                {
                                                    "source": "forAllUnits",
                                                    "id": "selectedUnit"
                                                },
                                                {
                                                    "source": "forAllUnits",
                                                    "id": "getSelectedUnit"
                                                }
                                            ],
                                            "type": "condition",
                                            "conditions": [
                                                {
                                                    "operator": "==",
                                                    "operandType": "playerType"
                                                },
                                                {
                                                    "vars": [
                                                        {
                                                            "source": "forAllUnits",
                                                            "id": "selectedUnit"
                                                        },
                                                        {
                                                            "source": "forAllUnits",
                                                            "id": "getSelectedUnit"
                                                        }
                                                    ],
                                                    "function": "playerTypeOfPlayer",
                                                    "player": {
                                                        "vars": [
                                                            {
                                                                "source": "forAllUnits",
                                                                "id": "selectedUnit"
                                                            },
                                                            {
                                                                "source": "forAllUnits",
                                                                "id": "getSelectedUnit"
                                                            }
                                                        ],
                                                        "function": "getOwner",
                                                        "entity": {
                                                            "vars": [
                                                                {
                                                                    "source": "forAllUnits",
                                                                    "id": "selectedUnit"
                                                                },
                                                                {
                                                                    "source": "forAllUnits",
                                                                    "id": "getSelectedUnit"
                                                                }
                                                            ],
                                                            "function": "selectedUnit"
                                                        }
                                                    }
                                                },
                                                "w1NiT3YV0e"
                                            ],
                                            "then": [
                                                {
                                                    "vars": [
                                                        {
                                                            "source": "forAllUnits",
                                                            "id": "selectedUnit"
                                                        },
                                                        {
                                                            "source": "forAllUnits",
                                                            "id": "getSelectedUnit"
                                                        }
                                                    ],
                                                    "entity": {
                                                        "vars": [
                                                            {
                                                                "source": "forAllUnits",
                                                                "id": "selectedUnit"
                                                            },
                                                            {
                                                                "source": "forAllUnits",
                                                                "id": "getSelectedUnit"
                                                            }
                                                        ],
                                                        "entity": {
                                                            "vars": [
                                                                {
                                                                    "source": "forAllUnits",
                                                                    "id": "selectedUnit"
                                                                },
                                                                {
                                                                    "source": "forAllUnits",
                                                                    "id": "getSelectedUnit"
                                                                }
                                                            ],
                                                            "function": "selectedUnit"
                                                        },
                                                        "function": "getOwner"
                                                    },
                                                    "value": {
                                                        "vars": [
                                                            {
                                                                "source": "forAllUnits",
                                                                "id": "selectedUnit"
                                                            },
                                                            {
                                                                "source": "forAllUnits",
                                                                "id": "getSelectedUnit"
                                                            }
                                                        ],
                                                        "items": [
                                                            "+",
                                                            {
                                                                "entity": {
                                                                    "entity": {
                                                                        "function": "selectedUnit"
                                                                    },
                                                                    "function": "getOwner"
                                                                },
                                                                "attribute": "n5JEoENeGg",
                                                                "function": "getPlayerAttribute"
                                                            },
                                                            {
                                                                "function": "calculate",
                                                                "items": [
                                                                    {
                                                                        "operator": "*"
                                                                    },
                                                                    {
                                                                        "function": "getVariable",
                                                                        "variableName": "@humanWinBonusMultiplier"
                                                                    },
                                                                    {
                                                                        "function": "getVariable",
                                                                        "variableName": "zombieCount"
                                                                    }
                                                                ]
                                                            }
                                                        ],
                                                        "function": "calculate"
                                                    },
                                                    "attribute": "n5JEoENeGg",
                                                    "type": "setPlayerAttribute"
                                                }
                                            ],
                                            "else": [
                                                {
                                                    "vars": [
                                                        {
                                                            "source": "forAllUnits",
                                                            "id": "selectedUnit"
                                                        },
                                                        {
                                                            "source": "forAllUnits",
                                                            "id": "getSelectedUnit"
                                                        }
                                                    ],
                                                    "type": "setPlayerAttribute",
                                                    "attribute": "TpL30eN1aR",
                                                    "entity": {
                                                        "vars": [
                                                            {
                                                                "source": "forAllUnits",
                                                                "id": "selectedUnit"
                                                            },
                                                            {
                                                                "source": "forAllUnits",
                                                                "id": "getSelectedUnit"
                                                            }
                                                        ],
                                                        "function": "getOwner",
                                                        "entity": {
                                                            "vars": [
                                                                {
                                                                    "source": "forAllUnits",
                                                                    "id": "selectedUnit"
                                                                },
                                                                {
                                                                    "source": "forAllUnits",
                                                                    "id": "getSelectedUnit"
                                                                }
                                                            ],
                                                            "function": "selectedUnit"
                                                        }
                                                    },
                                                    "value": 0
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            "then": [
                                {
                                    "vars": [],
                                    "type": "updateUiTextForEveryone",
                                    "target": "center-lg",
                                    "value": {
                                        "vars": [],
                                        "textB": "<br />Everyone will receive 500 points",
                                        "textA": "<span class='text-danger'> Zombies Win </span>",
                                        "function": "concat"
                                    }
                                }
                            ]
                        },
                        {
                            "vars": [],
                            "type": "stopMusic"
                        },
                        {
                            "vars": [],
                            "actions": [
                                {
                                    "vars": [
                                        {
                                            "source": "forAllPlayers",
                                            "id": "selectedPlayer"
                                        },
                                        {
                                            "source": "forAllPlayers",
                                            "id": "getSelectedPlayer"
                                        }
                                    ],
                                    "type": "forAllPlayers",
                                    "playerGroup": {
                                        "vars": [
                                            {
                                                "source": "forAllPlayers",
                                                "id": "selectedPlayer"
                                            },
                                            {
                                                "source": "forAllPlayers",
                                                "id": "getSelectedPlayer"
                                            }
                                        ],
                                        "function": "allPlayers"
                                    },
                                    "actions": [
                                        {
                                            "vars": [
                                                {
                                                    "source": "forAllPlayers",
                                                    "id": "selectedPlayer"
                                                },
                                                {
                                                    "source": "forAllPlayers",
                                                    "id": "getSelectedPlayer"
                                                }
                                            ],
                                            "type": "playAdForPlayer",
                                            "entity": {
                                                "vars": [
                                                    {
                                                        "source": "forAllPlayers",
                                                        "id": "selectedPlayer"
                                                    },
                                                    {
                                                        "source": "forAllPlayers",
                                                        "id": "getSelectedPlayer"
                                                    }
                                                ],
                                                "function": "selectedPlayer"
                                            }
                                        }
                                    ]
                                }
                            ],
                            "duration": "3000",
                            "type": "setTimeOut"
                        }
                    ],
                    "conditions": [
                        {
                            "operandType": "string",
                            "operator": "!="
                        },
                        {
                            "vars": [],
                            "variableName": "state",
                            "function": "getVariable"
                        },
                        "gameover"
                    ],
                    "type": "condition"
                }
            ],
            "key": "gameOver",
            "parent": "lXgsTw4yA9",
            "order": 3
        },
        "5NlaQRez0O": {
            "order": 0,
            "parent": "9GfMbWrWRJ",
            "key": "5NlaQRez0O",
            "triggers": [],
            "conditions": [
                {
                    "operator": "==",
                    "operandType": "boolean"
                },
                true,
                true
            ],
            "actions": [
                {
                    "vars": [
                        {
                            "source": "ability",
                            "id": "getLastCastingUnit"
                        }
                    ],
                    "entity": {
                        "vars": [
                            {
                                "source": "ability",
                                "id": "getLastCastingUnit"
                            }
                        ],
                        "entity": {
                            "vars": [
                                {
                                    "source": "ability",
                                    "id": "getLastCastingUnit"
                                }
                            ],
                            "function": "getLastCastingUnit"
                        },
                        "function": "getItemCurrentlyHeldByUnit"
                    },
                    "type": "startUsingItem",
                    "cspEnabled": true
                }
            ],
            "name": "start using item"
        },
        "7YM8wp6pKu": {
            "order": 4,
            "key": "7YM8wp6pKu",
            "parent": "9GfMbWrWRJ",
            "name": "open shop",
            "actions": [
                {
                    "player": {
                        "entity": {
                            "function": "getLastCastingUnit",
                            "vars": [
                                {
                                    "source": "ability",
                                    "id": "getLastCastingUnit"
                                }
                            ]
                        },
                        "function": "getOwner",
                        "vars": [
                            {
                                "source": "ability",
                                "id": "getLastCastingUnit"
                            }
                        ]
                    },
                    "shop": "h7JhXYNhvn",
                    "type": "openShopForPlayer",
                    "vars": [
                        {
                            "source": "ability",
                            "id": "getLastCastingUnit"
                        }
                    ]
                }
            ],
            "conditions": [
                {
                    "operandType": "boolean",
                    "operator": "=="
                },
                true,
                true
            ],
            "triggers": []
        },
        "pcHu5z3Kmk": {
            "order": 1,
            "key": "pcHu5z3Kmk",
            "parent": "3HIhswMTNZ",
            "name": "player leaves",
            "actions": [
                {
                    "vars": [
                        {
                            "source": "trigger",
                            "id": "getTriggeringPlayer"
                        },
                        {
                            "source": "forAllUnits",
                            "id": "selectedUnit"
                        },
                        {
                            "source": "forAllUnits",
                            "id": "getSelectedUnit"
                        }
                    ],
                    "actions": [
                        {
                            "vars": [
                                {
                                    "source": "trigger",
                                    "id": "getTriggeringPlayer"
                                },
                                {
                                    "source": "forAllUnits",
                                    "id": "selectedUnit"
                                },
                                {
                                    "source": "forAllUnits",
                                    "id": "getSelectedUnit"
                                }
                            ],
                            "type": "condition",
                            "conditions": [
                                {
                                    "operandType": "player",
                                    "operator": "=="
                                },
                                {
                                    "vars": [
                                        {
                                            "source": "trigger",
                                            "id": "getTriggeringPlayer"
                                        },
                                        {
                                            "source": "forAllUnits",
                                            "id": "selectedUnit"
                                        },
                                        {
                                            "source": "forAllUnits",
                                            "id": "getSelectedUnit"
                                        }
                                    ],
                                    "function": "getOwner",
                                    "entity": {
                                        "vars": [
                                            {
                                                "source": "trigger",
                                                "id": "getTriggeringPlayer"
                                            },
                                            {
                                                "source": "forAllUnits",
                                                "id": "selectedUnit"
                                            },
                                            {
                                                "source": "forAllUnits",
                                                "id": "getSelectedUnit"
                                            }
                                        ],
                                        "function": "selectedUnit"
                                    }
                                },
                                {
                                    "vars": [
                                        {
                                            "source": "trigger",
                                            "id": "getTriggeringPlayer"
                                        },
                                        {
                                            "source": "forAllUnits",
                                            "id": "selectedUnit"
                                        },
                                        {
                                            "source": "forAllUnits",
                                            "id": "getSelectedUnit"
                                        }
                                    ],
                                    "function": "getTriggeringPlayer"
                                }
                            ],
                            "then": [
                                {
                                    "vars": [
                                        {
                                            "source": "trigger",
                                            "id": "getTriggeringPlayer"
                                        },
                                        {
                                            "source": "forAllUnits",
                                            "id": "selectedUnit"
                                        },
                                        {
                                            "source": "forAllUnits",
                                            "id": "getSelectedUnit"
                                        },
                                        {
                                            "source": "forAllItems",
                                            "id": "selectedItem"
                                        },
                                        {
                                            "source": "forAllItems",
                                            "id": "getSelectedItem"
                                        }
                                    ],
                                    "type": "forAllItems",
                                    "itemGroup": {
                                        "vars": [
                                            {
                                                "source": "trigger",
                                                "id": "getTriggeringPlayer"
                                            },
                                            {
                                                "source": "forAllUnits",
                                                "id": "selectedUnit"
                                            },
                                            {
                                                "source": "forAllUnits",
                                                "id": "getSelectedUnit"
                                            },
                                            {
                                                "source": "forAllItems",
                                                "id": "selectedItem"
                                            },
                                            {
                                                "source": "forAllItems",
                                                "id": "getSelectedItem"
                                            }
                                        ],
                                        "function": "allItemsOwnedByUnit",
                                        "entity": {
                                            "vars": [
                                                {
                                                    "source": "trigger",
                                                    "id": "getTriggeringPlayer"
                                                },
                                                {
                                                    "source": "forAllUnits",
                                                    "id": "selectedUnit"
                                                },
                                                {
                                                    "source": "forAllUnits",
                                                    "id": "getSelectedUnit"
                                                },
                                                {
                                                    "source": "forAllItems",
                                                    "id": "selectedItem"
                                                },
                                                {
                                                    "source": "forAllItems",
                                                    "id": "getSelectedItem"
                                                }
                                            ],
                                            "function": "selectedUnit"
                                        }
                                    },
                                    "actions": [
                                        {
                                            "vars": [
                                                {
                                                    "source": "trigger",
                                                    "id": "getTriggeringPlayer"
                                                },
                                                {
                                                    "source": "forAllUnits",
                                                    "id": "selectedUnit"
                                                },
                                                {
                                                    "source": "forAllUnits",
                                                    "id": "getSelectedUnit"
                                                },
                                                {
                                                    "source": "forAllItems",
                                                    "id": "selectedItem"
                                                },
                                                {
                                                    "source": "forAllItems",
                                                    "id": "getSelectedItem"
                                                }
                                            ],
                                            "type": "destroyEntity",
                                            "entity": {
                                                "vars": [
                                                    {
                                                        "source": "trigger",
                                                        "id": "getTriggeringPlayer"
                                                    },
                                                    {
                                                        "source": "forAllUnits",
                                                        "id": "selectedUnit"
                                                    },
                                                    {
                                                        "source": "forAllUnits",
                                                        "id": "getSelectedUnit"
                                                    },
                                                    {
                                                        "source": "forAllItems",
                                                        "id": "selectedItem"
                                                    },
                                                    {
                                                        "source": "forAllItems",
                                                        "id": "getSelectedItem"
                                                    }
                                                ],
                                                "function": "selectedItem"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "vars": [
                                        {
                                            "source": "trigger",
                                            "id": "getTriggeringPlayer"
                                        },
                                        {
                                            "source": "forAllUnits",
                                            "id": "selectedUnit"
                                        },
                                        {
                                            "source": "forAllUnits",
                                            "id": "getSelectedUnit"
                                        }
                                    ],
                                    "entity": {
                                        "vars": [
                                            {
                                                "source": "trigger",
                                                "id": "getTriggeringPlayer"
                                            },
                                            {
                                                "source": "forAllUnits",
                                                "id": "selectedUnit"
                                            },
                                            {
                                                "source": "forAllUnits",
                                                "id": "getSelectedUnit"
                                            }
                                        ],
                                        "function": "selectedUnit"
                                    },
                                    "type": "destroyEntity"
                                }
                            ],
                            "else": []
                        }
                    ],
                    "unitGroup": {
                        "vars": [
                            {
                                "source": "trigger",
                                "id": "getTriggeringPlayer"
                            },
                            {
                                "source": "forAllUnits",
                                "id": "selectedUnit"
                            },
                            {
                                "source": "forAllUnits",
                                "id": "getSelectedUnit"
                            }
                        ],
                        "function": "allUnits"
                    },
                    "type": "forAllUnits"
                }
            ],
            "conditions": [
                {
                    "operandType": "boolean",
                    "operator": "=="
                },
                true,
                true
            ],
            "triggers": [
                {
                    "type": "playerLeavesGame"
                }
            ]
        },
        "M7OUSSk0Kh": {
            "triggers": [
                {
                    "type": "playerPurchasesUnit"
                }
            ],
            "conditions": [
                {
                    "operator": "==",
                    "operandType": "boolean"
                },
                true,
                true
            ],
            "actions": [
                {
                    "vars": [
                        {
                            "source": "trigger",
                            "id": "getTriggeringUnit"
                        },
                        {
                            "source": "trigger",
                            "id": "getTriggeringPlayer"
                        }
                    ],
                    "type": "changeUnitType",
                    "entity": {
                        "vars": [
                            {
                                "source": "trigger",
                                "id": "getTriggeringUnit"
                            },
                            {
                                "source": "trigger",
                                "id": "getTriggeringPlayer"
                            }
                        ],
                        "function": "getTriggeringUnit"
                    },
                    "unitType": {
                        "vars": [
                            {
                                "source": "trigger",
                                "id": "getTriggeringUnit"
                            },
                            {
                                "source": "trigger",
                                "id": "getTriggeringPlayer"
                            }
                        ],
                        "function": "lastPurchasedUnitTypetId"
                    }
                }
            ],
            "name": "player purchases a unit",
            "parent": "3HIhswMTNZ",
            "key": "M7OUSSk0Kh",
            "order": 2
        },
        "gz8XL501mw": {
            "triggers": [],
            "conditions": [
                {
                    "operator": "==",
                    "operandType": "boolean"
                },
                true,
                true
            ],
            "actions": [
                {
                    "vars": [
                        {
                            "source": "ability",
                            "id": "getLastCastingUnit"
                        },
                        {
                            "source": "forAllEntities",
                            "id": "selectedEntity"
                        },
                        {
                            "source": "forAllEntities",
                            "id": "getSelectedEntity"
                        }
                    ],
                    "actions": [
                        {
                            "vars": [
                                {
                                    "source": "ability",
                                    "id": "getLastCastingUnit"
                                },
                                {
                                    "source": "forAllEntities",
                                    "id": "selectedEntity"
                                },
                                {
                                    "source": "forAllEntities",
                                    "id": "getSelectedEntity"
                                }
                            ],
                            "type": "condition",
                            "conditions": [
                                {
                                    "operandType": "string",
                                    "operator": "=="
                                },
                                {
                                    "vars": [
                                        {
                                            "source": "ability",
                                            "id": "getLastCastingUnit"
                                        },
                                        {
                                            "source": "forAllEntities",
                                            "id": "selectedEntity"
                                        },
                                        {
                                            "source": "forAllEntities",
                                            "id": "getSelectedEntity"
                                        }
                                    ],
                                    "function": "getEntityType",
                                    "entity": {
                                        "vars": [
                                            {
                                                "source": "ability",
                                                "id": "getLastCastingUnit"
                                            },
                                            {
                                                "source": "forAllEntities",
                                                "id": "selectedEntity"
                                            },
                                            {
                                                "source": "forAllEntities",
                                                "id": "getSelectedEntity"
                                            }
                                        ],
                                        "function": "getSelectedEntity"
                                    }
                                },
                                "item"
                            ],
                            "then": [
                                {
                                    "vars": [
                                        {
                                            "source": "ability",
                                            "id": "getLastCastingUnit"
                                        },
                                        {
                                            "source": "forAllEntities",
                                            "id": "selectedEntity"
                                        },
                                        {
                                            "source": "forAllEntities",
                                            "id": "getSelectedEntity"
                                        }
                                    ],
                                    "type": "makeUnitPickupItem",
                                    "unit": {
                                        "vars": [
                                            {
                                                "source": "ability",
                                                "id": "getLastCastingUnit"
                                            },
                                            {
                                                "source": "forAllEntities",
                                                "id": "selectedEntity"
                                            },
                                            {
                                                "source": "forAllEntities",
                                                "id": "getSelectedEntity"
                                            }
                                        ],
                                        "function": "getLastCastingUnit"
                                    },
                                    "item": {
                                        "vars": [
                                            {
                                                "source": "ability",
                                                "id": "getLastCastingUnit"
                                            },
                                            {
                                                "source": "forAllEntities",
                                                "id": "selectedEntity"
                                            },
                                            {
                                                "source": "forAllEntities",
                                                "id": "getSelectedEntity"
                                            }
                                        ],
                                        "function": "getSelectedEntity"
                                    }
                                }
                            ],
                            "else": []
                        }
                    ],
                    "entityGroup": {
                        "vars": [
                            {
                                "source": "ability",
                                "id": "getLastCastingUnit"
                            },
                            {
                                "source": "forAllEntities",
                                "id": "selectedEntity"
                            },
                            {
                                "source": "forAllEntities",
                                "id": "getSelectedEntity"
                            }
                        ],
                        "region": {
                            "vars": [
                                {
                                    "source": "ability",
                                    "id": "getLastCastingUnit"
                                },
                                {
                                    "source": "forAllEntities",
                                    "id": "selectedEntity"
                                },
                                {
                                    "source": "forAllEntities",
                                    "id": "getSelectedEntity"
                                }
                            ],
                            "entity": {
                                "vars": [
                                    {
                                        "source": "ability",
                                        "id": "getLastCastingUnit"
                                    },
                                    {
                                        "source": "forAllEntities",
                                        "id": "selectedEntity"
                                    },
                                    {
                                        "source": "forAllEntities",
                                        "id": "getSelectedEntity"
                                    }
                                ],
                                "function": "getLastCastingUnit"
                            },
                            "function": "entityBounds"
                        },
                        "function": "entitiesInRegion"
                    },
                    "type": "forAllEntities"
                }
            ],
            "name": "pickup item",
            "parent": "9GfMbWrWRJ",
            "key": "gz8XL501mw",
            "order": 2
        },
        "yssVZ9bXmK": {
            "order": 1,
            "parent": null,
            "folderName": "Helpers",
            "key": "yssVZ9bXmK",
            "expanded": true
        },
        "yNLTQxb2xL": {
            "order": 3,
            "parent": null,
            "folderName": "Unit events",
            "key": "yNLTQxb2xL",
            "expanded": true
        },
        "L7DqYpNohQ": {
            "order": 3,
            "key": "L7DqYpNohQ",
            "parent": "yssVZ9bXmK",
            "name": "kick afk",
            "actions": [
                {
                    "disabled": false,
                    "type": "condition",
                    "conditions": [
                        {
                            "operandType": "attributeType",
                            "operator": "=="
                        },
                        {
                            "function": "getAttributeTypeOfAttribute",
                            "entity": {
                                "function": "getTriggeringAttribute",
                                "vars": [
                                    {
                                        "source": "trigger",
                                        "id": "getTriggeringUnit"
                                    },
                                    {
                                        "source": "trigger",
                                        "id": "getTriggeringAttribute"
                                    }
                                ]
                            },
                            "vars": [
                                {
                                    "source": "trigger",
                                    "id": "getTriggeringUnit"
                                },
                                {
                                    "source": "trigger",
                                    "id": "getTriggeringAttribute"
                                }
                            ]
                        },
                        "T6OgiGXZ9S"
                    ],
                    "then": [
                        {
                            "player": {
                                "entity": {
                                    "function": "getTriggeringUnit",
                                    "vars": [
                                        {
                                            "source": "trigger",
                                            "id": "getTriggeringUnit"
                                        },
                                        {
                                            "source": "trigger",
                                            "id": "getTriggeringAttribute"
                                        }
                                    ]
                                },
                                "function": "getOwner",
                                "vars": [
                                    {
                                        "source": "trigger",
                                        "id": "getTriggeringUnit"
                                    },
                                    {
                                        "source": "trigger",
                                        "id": "getTriggeringAttribute"
                                    }
                                ]
                            },
                            "type": "showMenu",
                            "vars": [
                                {
                                    "source": "trigger",
                                    "id": "getTriggeringUnit"
                                },
                                {
                                    "source": "trigger",
                                    "id": "getTriggeringAttribute"
                                }
                            ]
                        },
                        {
                            "entity": {
                                "entity": {
                                    "function": "getTriggeringUnit",
                                    "vars": [
                                        {
                                            "source": "trigger",
                                            "id": "getTriggeringUnit"
                                        },
                                        {
                                            "source": "trigger",
                                            "id": "getTriggeringAttribute"
                                        }
                                    ]
                                },
                                "function": "getOwner",
                                "vars": [
                                    {
                                        "source": "trigger",
                                        "id": "getTriggeringUnit"
                                    },
                                    {
                                        "source": "trigger",
                                        "id": "getTriggeringAttribute"
                                    }
                                ]
                            },
                            "type": "kickPlayer",
                            "vars": [
                                {
                                    "source": "trigger",
                                    "id": "getTriggeringUnit"
                                },
                                {
                                    "source": "trigger",
                                    "id": "getTriggeringAttribute"
                                }
                            ]
                        },
                        {
                            "type": "sendChatMessage",
                            "message": {
                                "function": "concat",
                                "textA": "Kicking ",
                                "textB": {
                                    "function": "concat",
                                    "textA": {
                                        "function": "getPlayerName",
                                        "entity": {
                                            "function": "getOwner",
                                            "entity": {
                                                "function": "getTriggeringUnit",
                                                "vars": [
                                                    {
                                                        "source": "trigger",
                                                        "id": "getTriggeringUnit"
                                                    },
                                                    {
                                                        "source": "trigger",
                                                        "id": "getTriggeringAttribute"
                                                    }
                                                ]
                                            },
                                            "vars": [
                                                {
                                                    "source": "trigger",
                                                    "id": "getTriggeringUnit"
                                                },
                                                {
                                                    "source": "trigger",
                                                    "id": "getTriggeringAttribute"
                                                }
                                            ]
                                        },
                                        "vars": [
                                            {
                                                "source": "trigger",
                                                "id": "getTriggeringUnit"
                                            },
                                            {
                                                "source": "trigger",
                                                "id": "getTriggeringAttribute"
                                            }
                                        ]
                                    },
                                    "textB": " for inactivity",
                                    "vars": [
                                        {
                                            "source": "trigger",
                                            "id": "getTriggeringUnit"
                                        },
                                        {
                                            "source": "trigger",
                                            "id": "getTriggeringAttribute"
                                        }
                                    ]
                                },
                                "vars": [
                                    {
                                        "source": "trigger",
                                        "id": "getTriggeringUnit"
                                    },
                                    {
                                        "source": "trigger",
                                        "id": "getTriggeringAttribute"
                                    }
                                ]
                            },
                            "vars": [
                                {
                                    "source": "trigger",
                                    "id": "getTriggeringUnit"
                                },
                                {
                                    "source": "trigger",
                                    "id": "getTriggeringAttribute"
                                }
                            ]
                        }
                    ],
                    "else": [],
                    "vars": [
                        {
                            "source": "trigger",
                            "id": "getTriggeringUnit"
                        },
                        {
                            "source": "trigger",
                            "id": "getTriggeringAttribute"
                        }
                    ]
                }
            ],
            "conditions": [
                {
                    "operandType": "boolean",
                    "operator": "=="
                },
                true,
                true
            ],
            "triggers": [
                {
                    "type": "unitAttributeBecomesZero"
                }
            ]
        },
        "OdoOMyqPRv": {
            "triggers": [
                {
                    "type": "gameStart"
                }
            ],
            "conditions": [
                {
                    "operator": "==",
                    "operandType": "boolean"
                },
                true,
                true
            ],
            "actions": [
                {
                    "playerType": "Yefn7qxVes",
                    "entity": {
                        "variableName": "ai",
                        "function": "getVariable",
                        "vars": []
                    },
                    "type": "assignPlayerType",
                    "vars": []
                }
            ],
            "name": "when game starts",
            "parent": "p7M3oYnpTg",
            "key": "OdoOMyqPRv",
            "order": 0
        },
        "nD7ne7eUU6": {
            "key": "nD7ne7eUU6",
            "folderName": "Movement",
            "parent": null,
            "order": 7,
            "expanded": true
        },
        "gQ7diAr0Em": {
            "order": 5,
            "key": "gQ7diAr0Em",
            "parent": "9GfMbWrWRJ",
            "name": "open help",
            "actions": [
                {
                    "vars": [
                        {
                            "source": "ability",
                            "id": "getLastCastingUnit"
                        }
                    ],
                    "player": {
                        "vars": [
                            {
                                "source": "ability",
                                "id": "getLastCastingUnit"
                            }
                        ],
                        "entity": {
                            "vars": [
                                {
                                    "source": "ability",
                                    "id": "getLastCastingUnit"
                                }
                            ],
                            "function": "getLastCastingUnit"
                        },
                        "function": "getOwner"
                    },
                    "htmlContent": {
                        "vars": [
                            {
                                "source": "ability",
                                "id": "getLastCastingUnit"
                            }
                        ],
                        "variableName": "helpText",
                        "function": "getVariable"
                    },
                    "type": "showCustomModalToPlayer"
                }
            ],
            "conditions": [
                {
                    "operandType": "boolean",
                    "operator": "=="
                },
                true,
                true
            ],
            "triggers": []
        },
        "p7M3oYnpTg": {
            "key": "p7M3oYnpTg",
            "folderName": "Game Logic",
            "parent": null,
            "order": 0,
            "expanded": true
        },
        "2sW7qdEbyT": {
            "triggers": [
                {
                    "type": "unitPickedAnItem"
                }
            ],
            "conditions": [
                {
                    "operator": "==",
                    "operandType": "boolean"
                },
                true,
                true
            ],
            "actions": [],
            "name": "player types !reset",
            "parent": "3HIhswMTNZ",
            "key": "2sW7qdEbyT",
            "order": 3
        },
        "initialize": {
            "order": 1,
            "key": "initialize",
            "parent": "p7M3oYnpTg",
            "name": "initialize",
            "actions": [],
            "triggers": [
                {
                    "type": "gameStart"
                }
            ],
            "isProtected": true
        },
        "2QHXwLnfUm": {
            "triggers": [],
            "conditions": [
                {
                    "operator": "==",
                    "operandType": "boolean"
                },
                true,
                true
            ],
            "actions": [
                {
                    "type": "condition",
                    "conditions": [
                        {
                            "operator": "<=",
                            "operandType": "number"
                        },
                        {
                            "function": "getEntityAttribute",
                            "attribute": "JNibtUdrRY",
                            "entity": {
                                "function": "getLastCastingUnit"
                            }
                        },
                        1
                    ],
                    "then": [
                        {
                            "type": "condition",
                            "conditions": [
                                {
                                    "operator": "==",
                                    "operandType": "string"
                                },
                                {
                                    "function": "getVariable",
                                    "variableName": "state"
                                },
                                "postoutbreak"
                            ],
                            "then": [
                                {
                                    "type": "condition",
                                    "conditions": [
                                        {
                                            "operandType": "number",
                                            "operator": ">"
                                        },
                                        {
                                            "function": "getVariable",
                                            "variableName": "timeLeft"
                                        },
                                        50
                                    ],
                                    "then": [
                                        {
                                            "position": {
                                                "region": {
                                                    "variableName": "spawn",
                                                    "function": "getVariable"
                                                },
                                                "function": "getRandomPositionInRegion"
                                            },
                                            "entity": {
                                                "function": "getLastCastingUnit"
                                            },
                                            "type": "moveEntity"
                                        },
                                        {
                                            "type": "setEntityAttribute",
                                            "attribute": "JNibtUdrRY",
                                            "entity": {
                                                "function": "getLastCastingUnit"
                                            },
                                            "value": 30
                                        }
                                    ],
                                    "else": []
                                }
                            ],
                            "else": []
                        }
                    ],
                    "else": []
                }
            ],
            "name": "teleport zombie to spawn",
            "parent": "9GfMbWrWRJ",
            "key": "2QHXwLnfUm",
            "order": 6
        },
        "dWmwdsDGEy": {
            "triggers": [
                {
                    "type": "projectileTouchesWall"
                },
                {
                    "type": "projectileTouchesDebris"
                },
                {
                    "type": "unitTouchesProjectile"
                }
            ],
            "conditions": [
                {
                    "operator": "==",
                    "operandType": "boolean"
                },
                true,
                true
            ],
            "actions": [
                {
                    "vars": [
                        {
                            "source": "trigger",
                            "id": "getTriggeringProjectile"
                        },
                        {
                            "source": "trigger",
                            "id": "getTriggeringProjectile"
                        },
                        {
                            "source": "trigger",
                            "id": "getTriggeringDebris"
                        },
                        {
                            "source": "trigger",
                            "id": "getLastTouchedProjectile"
                        },
                        {
                            "source": "trigger",
                            "id": "getTriggeringProjectile"
                        },
                        {
                            "source": "trigger",
                            "id": "getTriggeringUnit"
                        },
                        {
                            "source": "trigger",
                            "id": "getLastTouchingUnit"
                        }
                    ],
                    "else": [],
                    "then": [
                        {
                            "vars": [
                                {
                                    "source": "trigger",
                                    "id": "getTriggeringProjectile"
                                },
                                {
                                    "source": "trigger",
                                    "id": "getTriggeringProjectile"
                                },
                                {
                                    "source": "trigger",
                                    "id": "getTriggeringDebris"
                                },
                                {
                                    "source": "trigger",
                                    "id": "getLastTouchedProjectile"
                                },
                                {
                                    "source": "trigger",
                                    "id": "getTriggeringProjectile"
                                },
                                {
                                    "source": "trigger",
                                    "id": "getTriggeringUnit"
                                },
                                {
                                    "source": "trigger",
                                    "id": "getLastTouchingUnit"
                                }
                            ],
                            "else": [],
                            "then": [
                                {
                                    "vars": [
                                        {
                                            "source": "trigger",
                                            "id": "getTriggeringProjectile"
                                        },
                                        {
                                            "source": "trigger",
                                            "id": "getTriggeringProjectile"
                                        },
                                        {
                                            "source": "trigger",
                                            "id": "getTriggeringDebris"
                                        },
                                        {
                                            "source": "trigger",
                                            "id": "getLastTouchedProjectile"
                                        },
                                        {
                                            "source": "trigger",
                                            "id": "getTriggeringProjectile"
                                        },
                                        {
                                            "source": "trigger",
                                            "id": "getTriggeringUnit"
                                        },
                                        {
                                            "source": "trigger",
                                            "id": "getLastTouchingUnit"
                                        }
                                    ],
                                    "type": "setTimeOut",
                                    "duration": 200,
                                    "actions": [
                                        {
                                            "vars": [
                                                {
                                                    "source": "trigger",
                                                    "id": "getTriggeringProjectile"
                                                },
                                                {
                                                    "source": "trigger",
                                                    "id": "getTriggeringProjectile"
                                                },
                                                {
                                                    "source": "trigger",
                                                    "id": "getTriggeringDebris"
                                                },
                                                {
                                                    "source": "trigger",
                                                    "id": "getLastTouchedProjectile"
                                                },
                                                {
                                                    "source": "trigger",
                                                    "id": "getTriggeringProjectile"
                                                },
                                                {
                                                    "source": "trigger",
                                                    "id": "getTriggeringUnit"
                                                },
                                                {
                                                    "source": "trigger",
                                                    "id": "getLastTouchingUnit"
                                                }
                                            ],
                                            "type": "destroyEntity",
                                            "entity": {
                                                "vars": [
                                                    {
                                                        "source": "trigger",
                                                        "id": "getTriggeringProjectile"
                                                    },
                                                    {
                                                        "source": "trigger",
                                                        "id": "getTriggeringProjectile"
                                                    },
                                                    {
                                                        "source": "trigger",
                                                        "id": "getTriggeringDebris"
                                                    },
                                                    {
                                                        "source": "trigger",
                                                        "id": "getLastTouchedProjectile"
                                                    },
                                                    {
                                                        "source": "trigger",
                                                        "id": "getTriggeringProjectile"
                                                    },
                                                    {
                                                        "source": "trigger",
                                                        "id": "getTriggeringUnit"
                                                    },
                                                    {
                                                        "source": "trigger",
                                                        "id": "getLastTouchingUnit"
                                                    }
                                                ],
                                                "function": "getTriggeringProjectile"
                                            }
                                        }
                                    ]
                                }
                            ],
                            "conditions": [
                                {
                                    "operator": "==",
                                    "operandType": "projectileType"
                                },
                                "lpUqGiiq1R",
                                {
                                    "vars": [
                                        {
                                            "source": "trigger",
                                            "id": "getTriggeringProjectile"
                                        },
                                        {
                                            "source": "trigger",
                                            "id": "getTriggeringProjectile"
                                        },
                                        {
                                            "source": "trigger",
                                            "id": "getTriggeringDebris"
                                        },
                                        {
                                            "source": "trigger",
                                            "id": "getLastTouchedProjectile"
                                        },
                                        {
                                            "source": "trigger",
                                            "id": "getTriggeringProjectile"
                                        },
                                        {
                                            "source": "trigger",
                                            "id": "getTriggeringUnit"
                                        },
                                        {
                                            "source": "trigger",
                                            "id": "getLastTouchingUnit"
                                        }
                                    ],
                                    "entity": {
                                        "vars": [
                                            {
                                                "source": "trigger",
                                                "id": "getTriggeringProjectile"
                                            },
                                            {
                                                "source": "trigger",
                                                "id": "getTriggeringProjectile"
                                            },
                                            {
                                                "source": "trigger",
                                                "id": "getTriggeringDebris"
                                            },
                                            {
                                                "source": "trigger",
                                                "id": "getLastTouchedProjectile"
                                            },
                                            {
                                                "source": "trigger",
                                                "id": "getTriggeringProjectile"
                                            },
                                            {
                                                "source": "trigger",
                                                "id": "getTriggeringUnit"
                                            },
                                            {
                                                "source": "trigger",
                                                "id": "getLastTouchingUnit"
                                            }
                                        ],
                                        "function": "getTriggeringProjectile"
                                    },
                                    "function": "getProjectileTypeOfProjectile"
                                }
                            ],
                            "type": "condition"
                        }
                    ],
                    "conditions": [
                        {
                            "operandType": "unit",
                            "operator": "!="
                        },
                        {
                            "vars": [
                                {
                                    "source": "trigger",
                                    "id": "getTriggeringProjectile"
                                },
                                {
                                    "source": "trigger",
                                    "id": "getTriggeringProjectile"
                                },
                                {
                                    "source": "trigger",
                                    "id": "getTriggeringDebris"
                                },
                                {
                                    "source": "trigger",
                                    "id": "getLastTouchedProjectile"
                                },
                                {
                                    "source": "trigger",
                                    "id": "getTriggeringProjectile"
                                },
                                {
                                    "source": "trigger",
                                    "id": "getTriggeringUnit"
                                },
                                {
                                    "source": "trigger",
                                    "id": "getLastTouchingUnit"
                                }
                            ],
                            "function": "getTriggeringUnit"
                        },
                        {
                            "vars": [
                                {
                                    "source": "trigger",
                                    "id": "getTriggeringProjectile"
                                },
                                {
                                    "source": "trigger",
                                    "id": "getTriggeringProjectile"
                                },
                                {
                                    "source": "trigger",
                                    "id": "getTriggeringDebris"
                                },
                                {
                                    "source": "trigger",
                                    "id": "getLastTouchedProjectile"
                                },
                                {
                                    "source": "trigger",
                                    "id": "getTriggeringProjectile"
                                },
                                {
                                    "source": "trigger",
                                    "id": "getTriggeringUnit"
                                },
                                {
                                    "source": "trigger",
                                    "id": "getLastTouchingUnit"
                                }
                            ],
                            "entity": {
                                "vars": [
                                    {
                                        "source": "trigger",
                                        "id": "getTriggeringProjectile"
                                    },
                                    {
                                        "source": "trigger",
                                        "id": "getTriggeringProjectile"
                                    },
                                    {
                                        "source": "trigger",
                                        "id": "getTriggeringDebris"
                                    },
                                    {
                                        "source": "trigger",
                                        "id": "getLastTouchedProjectile"
                                    },
                                    {
                                        "source": "trigger",
                                        "id": "getTriggeringProjectile"
                                    },
                                    {
                                        "source": "trigger",
                                        "id": "getTriggeringUnit"
                                    },
                                    {
                                        "source": "trigger",
                                        "id": "getLastTouchingUnit"
                                    }
                                ],
                                "function": "getTriggeringProjectile"
                            },
                            "function": "getSourceUnitOfProjectile"
                        }
                    ],
                    "type": "condition"
                }
            ],
            "name": "bullet hits wall",
            "parent": "yssVZ9bXmK",
            "key": "dWmwdsDGEy",
            "order": 4
        }
    },
    "sound": {

    },
    "music": {

    },
    "itemTypes": {
        "stick": {
            "cost": {
                "quantity": 0
            },
            "fireRate": 1000,
            "inventoryImage": "",
            "variables": {

            },
            "carriedBy": [
                "human"
            ],
            "bonus": {
                "passive": {
                    "unitAttribute": {

                    },
                    "playerAttribute": {

                    }
                },
                "consume": {
                    "unitAttribute": {

                    },
                    "playerAttribute": {

                    }
                }
            },
            "attributes": {

            },
            "buffTypes": [
                "height",
                "stunChance",
                "slowChance",
                "movementSpeed",
                "immunity",
                "maxStamina"
            ],
            "body": {
                "type": "dynamic",
                "friction": 0,
                "width": 6,
                "height": 14,
                "holdPosition": {
                    "x": 0,
                    "y": 33,
                    "rotation": 0
                },
                "linearDamping": 1,
                "angularDamping": 1,
                "restitution": 1,
                "density": 1,
                "isTangible": true,
                "isFlying": false,
                "carriedBy": [
                    "human",
                    "PhuHFB46b2"
                ],
                "rotationSpeed": 3,
                "jointType": "weldJoint",
                "unitAnchor": {
                    "x": 0,
                    "y": 20,
                    "rotation": 0
                },
                "itemAnchor": {
                    "x": 0,
                    "y": 0
                },
                "collidesWith": {
                    "units": true,
                    "items": true,
                    "projectiles": true,
                    "walls": true,
                    "unit": true,
                    "item": true,
                    "debris": true
                },
                "typeWhenDrop": "dynamic",
                "z-index": {
                    "layer": 3,
                    "depth": 4
                },
                "fixedRotation": false,
                "name": "Stick"
            },
            "sound": {
                "fire": null
            },
            "spawnChance": 0.3,
            "type": "weapon",
            "isGun": false,
            "isPurchasable": true,
            "isStackable": false,
            "texture": "https://s3-us-west-1.amazonaws.com/modd/halloween-0.18/spritesheet/stick.png",
            "handle": "stick",
            "name": "Stick",
            "canBePurchasedBy": [
                "w1NiT3YV0e"
            ],
            "bulletStartPosition": {
                "x": 0,
                "y": 0
            },
            "hits": [],
            "damage": 2,
            "animations": {
                "TpsmgGVfi5": {
                    "name": "default",
                    "frames": [
                        1
                    ],
                    "loopCount": 0,
                    "framesPerSecond": 0
                }
            },
            "cellSheet": {
                "url": "https://s3-us-west-1.amazonaws.com/modd/halloween-0.18/spritesheet/stick.png",
                "rowCount": 1,
                "columnCount": 1
            },
            "states": {
                "dropped": {
                    "sound": {

                    },
                    "particles": {

                    },
                    "body": "dropped",
                    "animation": "TpsmgGVfi5",
                    "name": "dropped"
                },
                "unSelected": {
                    "sound": {

                    },
                    "particles": {

                    },
                    "body": "unSelected",
                    "animation": "TpsmgGVfi5",
                    "name": "unselected"
                },
                "selected": {
                    "sound": {

                    },
                    "particles": {

                    },
                    "body": "selected",
                    "animation": "TpsmgGVfi5",
                    "name": "selected"
                }
            },
            "bodies": {
                "dropped": {
                    "type": "static",
                    "friction": 0,
                    "width": 10,
                    "height": 22,
                    "holdPosition": {
                        "x": 0,
                        "y": 33,
                        "rotation": 0
                    },
                    "linearDamping": 1,
                    "angularDamping": 1,
                    "restitution": 1,
                    "density": 1,
                    "isTangible": true,
                    "isFlying": false,
                    "carriedBy": [
                        "human",
                        "PhuHFB46b2"
                    ],
                    "rotationSpeed": 3,
                    "jointType": "none",
                    "unitAnchor": {
                        "x": 0,
                        "y": 28,
                        "rotation": 0
                    },
                    "itemAnchor": {
                        "y": 0,
                        "x": 0
                    },
                    "collidesWith": {
                        "debris": false,
                        "walls": false,
                        "projectiles": false,
                        "items": false,
                        "units": false
                    },
                    "typeWhenDrop": "dynamic",
                    "z-index": {
                        "depth": 1,
                        "layer": 1
                    },
                    "fixedRotation": false,
                    "name": "dropped",
                    "bullet": false,
                    "allowSleep": true,
                    "spriteScale": 1,
                    "fixtures": [
                        {
                            "density": 1,
                            "friction": 0.01,
                            "restitution": 0.01,
                            "shape": {
                                "type": "rectangle"
                            },
                            "isSensor": true
                        }
                    ]
                },
                "unSelected": {
                    "type": "none",
                    "friction": 0,
                    "width": 6,
                    "height": 14,
                    "holdPosition": {
                        "x": 0,
                        "y": 33,
                        "rotation": 0
                    },
                    "linearDamping": 1,
                    "angularDamping": 1,
                    "restitution": 1,
                    "density": 1,
                    "isTangible": true,
                    "isFlying": false,
                    "carriedBy": [
                        "human",
                        "PhuHFB46b2"
                    ],
                    "rotationSpeed": 3,
                    "jointType": "weldJoint",
                    "unitAnchor": {
                        "x": 0,
                        "y": 20,
                        "rotation": 0
                    },
                    "itemAnchor": {
                        "x": 0,
                        "y": 0
                    },
                    "collidesWith": {
                        "debris": false,
                        "walls": true,
                        "projectiles": true,
                        "items": true,
                        "units": true
                    },
                    "typeWhenDrop": "dynamic",
                    "z-index": {
                        "depth": 3,
                        "layer": 3
                    },
                    "fixedRotation": false,
                    "name": "unselected"
                },
                "selected": {
                    "fixtures": [
                        {
                            "isSensor": false,
                            "shape": {
                                "type": "rectangle"
                            },
                            "restitution": 0.01,
                            "friction": 0.01,
                            "density": 1
                        }
                    ],
                    "spriteScale": 1,
                    "allowSleep": true,
                    "bullet": false,
                    "type": "dynamic",
                    "friction": 0,
                    "width": 10,
                    "height": 22,
                    "holdPosition": {
                        "x": 0,
                        "y": 33,
                        "rotation": 0
                    },
                    "linearDamping": 1,
                    "angularDamping": 1,
                    "restitution": 1,
                    "density": 1,
                    "isTangible": true,
                    "isFlying": false,
                    "carriedBy": [
                        "human",
                        "PhuHFB46b2"
                    ],
                    "rotationSpeed": 2,
                    "jointType": "weldJoint",
                    "unitAnchor": {
                        "x": 0,
                        "y": 28,
                        "rotation": 0
                    },
                    "itemAnchor": {
                        "y": 0,
                        "x": 0
                    },
                    "collidesWith": {
                        "debris": true,
                        "walls": false,
                        "projectiles": true,
                        "items": true,
                        "units": true
                    },
                    "typeWhenDrop": "dynamic",
                    "z-index": {
                        "depth": 3,
                        "layer": 3
                    },
                    "fixedRotation": false,
                    "name": "selected"
                }
            },
            "quantity": null,
            "maxQuantity": null,
            "description": "A very expensive stick"
        },
        "pill": {
            "confinedWithinMapBoundaries": true,
            "isUsedOnPickup": false,
            "description": "Lowers your chance to become first zombie (left click to use)",
            "maxQuantity": 1,
            "quantity": 1,
            "bodies": {
                "selected": {
                    "fixtures": [
                        {
                            "isSensor": true,
                            "shape": {
                                "type": "rectangle"
                            },
                            "restitution": 0.01,
                            "friction": 0.01,
                            "density": 1
                        }
                    ],
                    "spriteScale": 1,
                    "allowSleep": true,
                    "bullet": false,
                    "fixedRotation": false,
                    "name": "selected",
                    "type": "spriteOnly",
                    "collidesWith": {
                        "units": true,
                        "items": true,
                        "projectiles": true,
                        "walls": true,
                        "debris": false
                    },
                    "itemAnchor": {
                        "y": 0,
                        "x": 0
                    },
                    "unitAnchor": {
                        "rotation": 0,
                        "y": 25,
                        "x": 0
                    },
                    "jointType": "weldJoint",
                    "rotationSpeed": 3,
                    "carriedBy": [
                        "human"
                    ],
                    "isFlying": false,
                    "isTangible": true,
                    "density": 1,
                    "restitution": 1,
                    "angularDamping": 1,
                    "linearDamping": 1,
                    "holdPosition": {
                        "rotation": 0,
                        "y": 33,
                        "x": 0
                    },
                    "height": 20,
                    "width": 10,
                    "friction": 0,
                    "z-index": {
                        "layer": 3,
                        "depth": 3
                    }
                },
                "dropped": {
                    "name": "dropped",
                    "type": "static",
                    "collidesWith": {
                        "units": true,
                        "items": false,
                        "projectiles": false,
                        "walls": false,
                        "debris": false
                    },
                    "itemAnchor": {
                        "y": 0,
                        "x": 0
                    },
                    "unitAnchor": {
                        "rotation": 0,
                        "y": 25,
                        "x": 0
                    },
                    "jointType": "none",
                    "rotationSpeed": 3,
                    "carriedBy": [
                        "human"
                    ],
                    "isFlying": false,
                    "isTangible": true,
                    "density": 1,
                    "restitution": 1,
                    "angularDamping": 1,
                    "linearDamping": 1,
                    "holdPosition": {
                        "rotation": 0,
                        "y": 33,
                        "x": 0
                    },
                    "height": 20,
                    "width": 10,
                    "friction": 0,
                    "z-index": {
                        "layer": 1,
                        "depth": 1
                    },
                    "fixedRotation": false,
                    "bullet": false,
                    "allowSleep": true,
                    "spriteScale": 1,
                    "fixtures": [
                        {
                            "density": 1,
                            "friction": 0.01,
                            "restitution": 0.01,
                            "shape": {
                                "type": "rectangle"
                            },
                            "isSensor": true
                        }
                    ]
                },
                "unSelected": {
                    "name": "unselected",
                    "fixedRotation": false,
                    "z-index": {
                        "layer": 3,
                        "depth": 3
                    },
                    "typeWhenDrop": "dynamic",
                    "type": "none",
                    "width": 12,
                    "height": 42,
                    "holdPosition": {
                        "x": 0,
                        "y": 33,
                        "rotation": 0
                    },
                    "linearDamping": 1,
                    "angularDamping": 1,
                    "restitution": 1,
                    "density": 1,
                    "isTangible": true,
                    "isFlying": false,
                    "carriedBy": [
                        "human",
                        "PhuHFB46b2"
                    ],
                    "rotationSpeed": 3,
                    "jointType": "weldJoint",
                    "unitAnchor": {
                        "x": 0,
                        "y": 30,
                        "rotation": 0
                    },
                    "itemAnchor": {
                        "x": 0,
                        "y": 0
                    },
                    "collidesWith": {
                        "units": true,
                        "items": true,
                        "projectiles": true,
                        "walls": true,
                        "debris": false
                    },
                    "friction": 0
                }
            },
            "states": {
                "selected": {
                    "name": "selected",
                    "animation": "TpsmgGVfi5",
                    "body": "selected",
                    "particles": {

                    },
                    "sound": {

                    }
                },
                "unSelected": {
                    "name": "unselected",
                    "animation": "TpsmgGVfi5",
                    "body": "unSelected",
                    "particles": {

                    },
                    "sound": {

                    }
                },
                "dropped": {
                    "name": "dropped",
                    "animation": "TpsmgGVfi5",
                    "body": "dropped",
                    "particles": {

                    },
                    "sound": {

                    }
                }
            },
            "cellSheet": {
                "columnCount": 1,
                "rowCount": 1,
                "url": "https://modd.s3.amazonaws.com/asset/spriteImage/1516617820395_pill.png"
            },
            "animations": {
                "TpsmgGVfi5": {
                    "framesPerSecond": 0,
                    "loopCount": 0,
                    "frames": [
                        1
                    ],
                    "name": "default"
                }
            },
            "effects": {
                "empty": {
                    "sound": {

                    },
                    "particles": {

                    }
                },
                "reload": {
                    "sound": {

                    },
                    "particles": {

                    }
                },
                "use": {
                    "sound": {

                    },
                    "particles": {

                    }
                }
            },
            "bonus": {
                "isConsumedImmediately": false,
                "passive": {
                    "unitAttribute": {

                    },
                    "playerAttribute": {

                    }
                },
                "consume": {
                    "coin": 0,
                    "unitAttribute": {
                        "K2mih60v2P": 75
                    },
                    "playerAttribute": {

                    }
                }
            },
            "damage": 2,
            "hits": [],
            "bulletStartPosition": {
                "y": 0,
                "x": 0
            },
            "removeWhenEmpty": true,
            "lifeSpan": 60000,
            "canBePurchasedBy": [
                "w1NiT3YV0e"
            ],
            "name": "Pill",
            "handle": "pill",
            "texture": "https://modd.s3.amazonaws.com/asset/spriteImage/1516617820395_pill.png",
            "isStackable": false,
            "isPurchasable": true,
            "type": "consumable",
            "isConsumedImmediately": false,
            "consumeBonus": {
                "unitAttributeBonus": {

                },
                "playerAttributeBonus": {

                },
                "attributes": {
                    "K2mih60v2P": 70,
                    "36S6GnLWqK": 70
                }
            },
            "body": {
                "name": "Pill",
                "type": "dynamic",
                "collidesWith": {
                    "item": false,
                    "unit": false,
                    "walls": false,
                    "projectiles": false,
                    "items": false,
                    "units": false
                },
                "itemAnchor": {
                    "x": 0,
                    "y": 0
                },
                "unitAnchor": {
                    "rotation": 0,
                    "y": 20,
                    "x": 0
                },
                "jointType": "weldJoint",
                "rotationSpeed": 3,
                "carriedBy": [
                    "human"
                ],
                "isFlying": false,
                "isTangible": true,
                "density": 1,
                "restitution": 1,
                "angularDamping": 1,
                "linearDamping": 1,
                "holdPosition": {
                    "rotation": 0,
                    "y": 33,
                    "x": 0
                },
                "height": 40,
                "width": 20,
                "friction": 0
            },
            "isGun": true,
            "spawnChance": 0.2,
            "sound": {
                "fire": null
            },
            "canBeUsedBy": [
                "human"
            ],
            "bulletType": "raycast",
            "ammoSize": 1,
            "ammo": 1,
            "ammoTotal": 1,
            "reloadRate": 2800,
            "recoilForce": 0,
            "fireRate": 70,
            "knockbackForce": 0,
            "bulletDistance": 1300,
            "penetration": false,
            "attributes": {

            },
            "carriedBy": [
                "human"
            ],
            "variables": {

            },
            "inventoryImage": ""
        },
        "baseball_bat": {
            "deployMethod": "setVelocity",
            "inventoryImage": "",
            "variables": {

            },
            "carriedBy": [
                "human"
            ],
            "bonus": {
                "passive": {
                    "unitAttribute": {

                    },
                    "playerAttribute": {

                    }
                },
                "consume": {
                    "unitAttribute": {

                    },
                    "playerAttribute": {

                    }
                }
            },
            "canBePurchasedBy": [
                "w1NiT3YV0e"
            ],
            "name": "Baseball Bat",
            "handle": "baseball_bat",
            "texture": "https://s3-us-west-1.amazonaws.com/modd/halloween-0.18/spritesheet/baseball_bat.png",
            "isStackable": false,
            "isPurchasable": true,
            "isGun": false,
            "type": "weapon",
            "spawnChance": 0.07,
            "sound": {
                "fire": null
            },
            "body": {
                "friction": 0,
                "collidesWith": {
                    "debris": true,
                    "item": true,
                    "unit": true,
                    "walls": true,
                    "projectiles": true,
                    "items": true,
                    "units": true
                },
                "itemAnchor": {
                    "y": 0,
                    "x": 0
                },
                "unitAnchor": {
                    "rotation": 0,
                    "y": 30,
                    "x": 0
                },
                "jointType": "weldJoint",
                "rotationSpeed": 3,
                "carriedBy": [
                    "human",
                    "PhuHFB46b2"
                ],
                "isFlying": false,
                "isTangible": true,
                "density": 1,
                "restitution": 1,
                "angularDamping": 1,
                "linearDamping": 1,
                "holdPosition": {
                    "rotation": 0,
                    "y": 33,
                    "x": 0
                },
                "height": 42,
                "width": 12,
                "type": "dynamic",
                "typeWhenDrop": "dynamic",
                "z-index": {
                    "layer": 3,
                    "depth": 4
                },
                "fixedRotation": false,
                "name": "Baseball Bat"
            },
            "buffTypes": [
                "height",
                "stunChance",
                "slowChance",
                "movementSpeed",
                "immunity",
                "maxStamina"
            ],
            "bulletStartPosition": {
                "x": 0,
                "y": 0
            },
            "hits": [],
            "damage": 2,
            "attributes": {

            },
            "animations": {
                "TpsmgGVfi5": {
                    "name": "default",
                    "frames": [
                        1
                    ],
                    "loopCount": 0,
                    "framesPerSecond": 0
                }
            },
            "cellSheet": {
                "url": "https://s3-us-west-1.amazonaws.com/modd/halloween-0.18/spritesheet/baseball_bat.png",
                "rowCount": 1,
                "columnCount": 1
            },
            "states": {
                "dropped": {
                    "sound": {

                    },
                    "particles": {

                    },
                    "body": "dropped",
                    "animation": "TpsmgGVfi5",
                    "name": "dropped"
                },
                "unSelected": {
                    "sound": {

                    },
                    "particles": {

                    },
                    "body": "unSelected",
                    "animation": "TpsmgGVfi5",
                    "name": "unselected"
                },
                "selected": {
                    "sound": {

                    },
                    "particles": {

                    },
                    "body": "selected",
                    "animation": "TpsmgGVfi5",
                    "name": "selected"
                }
            },
            "bodies": {
                "dropped": {
                    "fixtures": [
                        {
                            "isSensor": true,
                            "shape": {
                                "type": "rectangle"
                            },
                            "restitution": 0.01,
                            "friction": 0.01,
                            "density": 1
                        }
                    ],
                    "spriteScale": 1,
                    "allowSleep": true,
                    "bullet": false,
                    "friction": 0,
                    "collidesWith": {
                        "debris": false,
                        "walls": false,
                        "projectiles": false,
                        "items": false,
                        "units": false
                    },
                    "itemAnchor": {
                        "y": 0,
                        "x": 0
                    },
                    "unitAnchor": {
                        "rotation": 0,
                        "y": 38,
                        "x": 0
                    },
                    "jointType": "none",
                    "rotationSpeed": 1,
                    "carriedBy": [
                        "human",
                        "PhuHFB46b2"
                    ],
                    "isFlying": false,
                    "isTangible": true,
                    "density": 1,
                    "restitution": 1,
                    "angularDamping": 1,
                    "linearDamping": 1,
                    "holdPosition": {
                        "rotation": 0,
                        "y": 33,
                        "x": 0
                    },
                    "height": 50,
                    "width": 12,
                    "type": "static",
                    "typeWhenDrop": "dynamic",
                    "z-index": {
                        "depth": 1,
                        "layer": 1
                    },
                    "fixedRotation": false,
                    "name": "dropped"
                },
                "unSelected": {
                    "friction": 0,
                    "collidesWith": {
                        "debris": false,
                        "walls": true,
                        "projectiles": true,
                        "items": true,
                        "units": true
                    },
                    "itemAnchor": {
                        "y": 0,
                        "x": 0
                    },
                    "unitAnchor": {
                        "rotation": 0,
                        "y": 30,
                        "x": 0
                    },
                    "jointType": "weldJoint",
                    "rotationSpeed": 3,
                    "carriedBy": [
                        "human",
                        "PhuHFB46b2"
                    ],
                    "isFlying": false,
                    "isTangible": true,
                    "density": 1,
                    "restitution": 1,
                    "angularDamping": 1,
                    "linearDamping": 1,
                    "holdPosition": {
                        "rotation": 0,
                        "y": 33,
                        "x": 0
                    },
                    "height": 42,
                    "width": 12,
                    "type": "none",
                    "typeWhenDrop": "dynamic",
                    "z-index": {
                        "depth": 3,
                        "layer": 3
                    },
                    "fixedRotation": false,
                    "name": "unselected"
                },
                "selected": {
                    "fixtures": [
                        {
                            "shape": {
                                "type": "rectangle"
                            },
                            "restitution": 0,
                            "friction": 0,
                            "density": 1,
                            "isSensor": false
                        }
                    ],
                    "spriteScale": 1,
                    "allowSleep": false,
                    "bullet": true,
                    "friction": 0,
                    "collidesWith": {
                        "debris": true,
                        "walls": false,
                        "projectiles": true,
                        "items": true,
                        "units": true
                    },
                    "itemAnchor": {
                        "x": 0,
                        "y": 0
                    },
                    "unitAnchor": {
                        "rotation": 0,
                        "y": 38,
                        "x": 0
                    },
                    "jointType": "weldJoint",
                    "rotationSpeed": 3,
                    "carriedBy": [
                        "human",
                        "PhuHFB46b2"
                    ],
                    "isFlying": false,
                    "isTangible": true,
                    "density": 1,
                    "restitution": 1,
                    "angularDamping": 0,
                    "linearDamping": 0,
                    "holdPosition": {
                        "rotation": 0,
                        "y": 33,
                        "x": 0
                    },
                    "height": 50,
                    "width": 12,
                    "type": "dynamic",
                    "typeWhenDrop": "dynamic",
                    "z-index": {
                        "depth": 3,
                        "layer": 3
                    },
                    "fixedRotation": false,
                    "name": "selected"
                }
            },
            "quantity": null,
            "maxQuantity": null,
            "description": "Use the baseball bat to move objects",
            "fireRate": 1000,
            "cost": {
                "quantity": 0
            },
            "effects": {
                "destroy": {
                    "animation": "",
                    "sound": {

                    },
                    "projectileType": ""
                },
                "create": {
                    "animation": "",
                    "sound": {

                    },
                    "projectileType": ""
                },
                "use": {
                    "particles": {

                    },
                    "sound": {

                    },
                    "animation": ""
                },
                "reload": {
                    "particles": {

                    },
                    "sound": {

                    },
                    "animation": ""
                },
                "empty": {
                    "particles": {

                    },
                    "sound": {

                    },
                    "animation": ""
                }
            },
            "lifeSpan": 60000,
            "removeWhenEmpty": false,
            "isUsedOnPickup": false,
            "hideIfUnaffordable": false
        },
        "katana": {
            "deployMethod": "setVelocity",
            "inventoryImage": "",
            "variables": {

            },
            "carriedBy": [
                "human"
            ],
            "canBePurchasedBy": [
                "w1NiT3YV0e"
            ],
            "damage": 2,
            "hits": [],
            "penetration": false,
            "bulletForce": 14,
            "fireRate": 1000,
            "recoilForce": 0,
            "reloadRate": 2800,
            "ammoTotal": 90,
            "ammo": 30,
            "ammoSize": 30,
            "bulletType": "raycast",
            "bulletStartPosition": {
                "y": 0,
                "x": 0
            },
            "name": "Katana",
            "handle": "katana",
            "texture": "https://s3-us-west-1.amazonaws.com/modd/halloween-0.18/spritesheet/katana.png",
            "isStackable": false,
            "isPurchasable": true,
            "isGun": false,
            "type": "weapon",
            "spawnChance": 0.05,
            "sound": {
                "fire": null
            },
            "body": {
                "friction": 0,
                "collidesWith": {
                    "debris": true,
                    "item": true,
                    "unit": true,
                    "walls": true,
                    "projectiles": true,
                    "items": true,
                    "units": true
                },
                "itemAnchor": {
                    "x": 0,
                    "y": 0
                },
                "unitAnchor": {
                    "rotation": 0,
                    "y": 35,
                    "x": 0
                },
                "jointType": "none",
                "rotationSpeed": 3,
                "carriedBy": [
                    "human"
                ],
                "isFlying": false,
                "isTangible": true,
                "density": 1,
                "restitution": 1,
                "angularDamping": 1,
                "linearDamping": 1,
                "holdPosition": {
                    "rotation": 0,
                    "y": 33,
                    "x": 0
                },
                "height": 70,
                "width": 12,
                "type": "dynamic",
                "typeWhenDrop": "dynamic",
                "z-index": {
                    "layer": 3,
                    "depth": 4
                },
                "fixedRotation": false,
                "name": "Katana"
            },
            "buffTypes": [
                "height",
                "stunChance",
                "slowChance",
                "movementSpeed",
                "immunity",
                "maxStamina"
            ],
            "attributes": {

            },
            "animations": {
                "TpsmgGVfi5": {
                    "name": "default",
                    "frames": [
                        1
                    ],
                    "loopCount": 0,
                    "framesPerSecond": 0
                }
            },
            "cellSheet": {
                "url": "https://s3-us-west-1.amazonaws.com/modd/halloween-0.18/spritesheet/katana.png",
                "rowCount": 1,
                "columnCount": 1
            },
            "states": {
                "dropped": {
                    "sound": {

                    },
                    "particles": {

                    },
                    "body": "dropped",
                    "animation": "TpsmgGVfi5",
                    "name": "dropped"
                },
                "unSelected": {
                    "sound": {

                    },
                    "particles": {

                    },
                    "body": "unSelected",
                    "animation": "TpsmgGVfi5",
                    "name": "unselected"
                },
                "selected": {
                    "sound": {

                    },
                    "particles": {

                    },
                    "body": "selected",
                    "animation": "TpsmgGVfi5",
                    "name": "selected"
                }
            },
            "bodies": {
                "dropped": {
                    "fixtures": [
                        {
                            "isSensor": true,
                            "shape": {
                                "type": "rectangle"
                            },
                            "restitution": 0.01,
                            "friction": 0.01,
                            "density": 1
                        }
                    ],
                    "spriteScale": 1,
                    "allowSleep": true,
                    "bullet": false,
                    "friction": 0,
                    "collidesWith": {
                        "debris": false,
                        "walls": false,
                        "projectiles": false,
                        "items": false,
                        "units": false
                    },
                    "itemAnchor": {
                        "x": 0,
                        "y": 0
                    },
                    "unitAnchor": {
                        "rotation": 0,
                        "y": 40,
                        "x": 0
                    },
                    "jointType": "none",
                    "rotationSpeed": 1,
                    "carriedBy": [
                        "human"
                    ],
                    "isFlying": false,
                    "isTangible": true,
                    "density": 1,
                    "restitution": 1,
                    "angularDamping": 1,
                    "linearDamping": 1,
                    "holdPosition": {
                        "rotation": 0,
                        "y": 33,
                        "x": 0
                    },
                    "height": 55,
                    "width": 11,
                    "type": "static",
                    "typeWhenDrop": "dynamic",
                    "z-index": {
                        "depth": 1,
                        "layer": 1
                    },
                    "fixedRotation": false,
                    "name": "dropped"
                },
                "unSelected": {
                    "friction": 0,
                    "collidesWith": {
                        "debris": false,
                        "walls": true,
                        "projectiles": true,
                        "items": true,
                        "units": true
                    },
                    "itemAnchor": {
                        "x": 0,
                        "y": 0
                    },
                    "unitAnchor": {
                        "rotation": 0,
                        "y": 35,
                        "x": 0
                    },
                    "jointType": "none",
                    "rotationSpeed": 3,
                    "carriedBy": [
                        "human"
                    ],
                    "isFlying": false,
                    "isTangible": true,
                    "density": 1,
                    "restitution": 1,
                    "angularDamping": 1,
                    "linearDamping": 1,
                    "holdPosition": {
                        "rotation": 0,
                        "y": 33,
                        "x": 0
                    },
                    "height": 70,
                    "width": 12,
                    "type": "none",
                    "typeWhenDrop": "dynamic",
                    "z-index": {
                        "depth": 3,
                        "layer": 3
                    },
                    "fixedRotation": false,
                    "name": "unselected"
                },
                "selected": {
                    "friction": 0,
                    "collidesWith": {
                        "debris": true,
                        "walls": false,
                        "projectiles": true,
                        "items": true,
                        "units": true
                    },
                    "itemAnchor": {
                        "x": 0,
                        "y": 0
                    },
                    "unitAnchor": {
                        "rotation": 0,
                        "y": 40,
                        "x": 0
                    },
                    "jointType": "weldJoint",
                    "rotationSpeed": 3,
                    "carriedBy": [
                        "human"
                    ],
                    "isFlying": false,
                    "isTangible": true,
                    "density": 1,
                    "restitution": 1,
                    "angularDamping": 0,
                    "linearDamping": 0,
                    "holdPosition": {
                        "rotation": 0,
                        "y": 33,
                        "x": 0
                    },
                    "height": 55,
                    "width": 11,
                    "type": "dynamic",
                    "typeWhenDrop": "dynamic",
                    "z-index": {
                        "depth": 3,
                        "layer": 3
                    },
                    "fixedRotation": false,
                    "name": "selected",
                    "bullet": true,
                    "allowSleep": false,
                    "spriteScale": 1,
                    "fixtures": [
                        {
                            "density": "0.7",
                            "friction": 0,
                            "restitution": 0,
                            "shape": {
                                "type": "rectangle"
                            },
                            "isSensor": false
                        }
                    ]
                }
            },
            "quantity": null,
            "maxQuantity": null,
            "description": " Stronger than the baseball bat!",
            "hideIfUnaffordable": false,
            "cost": {
                "quantity": 0
            }
        },
        "potato_gun": {
            "hideIfUnaffordable": false,
            "inventoryImage": "",
            "variables": {

            },
            "carriedBy": [
                "human"
            ],
            "cost": {
                "playerAttributes": {
                    "n5JEoENeGg": 25
                }
            },
            "autoUpdateQuantity": false,
            "maxQuantity": null,
            "quantity": null,
            "lifeSpan": 60000,
            "particles": {
                "k4HSd1axqA": {
                    "velocityVector": {
                        "maxVector": {
                            "y": 1,
                            "x": 1
                        },
                        "minVector": {
                            "y": -1,
                            "x": -1
                        },
                        "baseVector": {
                            "y": 0,
                            "x": 0
                        }
                    },
                    "mountPosition": {
                        "y": 50,
                        "x": 0
                    },
                    "deathOpacityBase": 0.5,
                    "quantityTimespan": 70,
                    "quantityBase": 40,
                    "lifeBase": 50,
                    "color": "#ffffff",
                    "name": "spark"
                }
            },
            "canBePurchasedBy": [
                "w1NiT3YV0e"
            ],
            "damage": 2,
            "hits": [],
            "penetration": false,
            "bulletStartPosition": {
                "y": 20,
                "x": 0
            },
            "name": "Potato Gun",
            "handle": "potato_gun",
            "texture": "https://s3-us-west-1.amazonaws.com/modd/halloween-0.18/spritesheet/potato_gun.png",
            "isStackable": false,
            "isPurchasable": true,
            "isGun": true,
            "type": "weapon",
            "spawnChance": 0.08,
            "ammoSize": 10000,
            "ammo": 10000,
            "ammoTotal": 10000,
            "reloadRate": 10,
            "recoilForce": 0,
            "fireRate": 1200,
            "bulletType": "projectile",
            "distanceStart": 40,
            "bulletForce": 19000,
            "projectileType": "potato",
            "sound": {
                "nppwtuQaPz": {
                    "name": "Fire",
                    "file": "https://modd.s3.amazonaws.com/asset/sound/1517544024385_fire_rifle.mp3"
                },
                "fire": "fireMinigun",
                "reload": "reload",
                "empty": "fireEmpty",
                "zjlCUPiCk0": {
                    "file": "https://modd.s3.amazonaws.com/asset/sound/1517544320311_fire_empty.mp3",
                    "name": "Out of ammo"
                },
                "GyCivqsuR8": {
                    "file": "https://modd.s3.amazonaws.com/asset/sound/1517544292301_reload.mp3",
                    "name": "Reload"
                }
            },
            "body": {
                "type": "dynamic",
                "collidesWith": {
                    "walls": true,
                    "projectiles": true,
                    "items": true,
                    "units": true,
                    "debris": true
                },
                "itemAnchor": {
                    "y": 0,
                    "x": 0
                },
                "unitAnchor": {
                    "rotation": 0,
                    "y": 33,
                    "x": 0
                },
                "jointType": "weldJoint",
                "rotationSpeed": 3,
                "width": 12,
                "height": 40,
                "holdPosition": {
                    "rotation": 0,
                    "y": 40,
                    "x": 0
                },
                "linearDamping": 1,
                "angularDamping": 1,
                "restitution": 1,
                "density": 1,
                "isTangible": false,
                "isFlying": false,
                "carriedBy": [
                    "human",
                    "PhuHFB46b2"
                ],
                "friction": 0,
                "typeWhenDrop": "dynamic",
                "z-index": {
                    "layer": 3,
                    "depth": 4
                },
                "fixedRotation": false,
                "name": "Potato Gun"
            },
            "buffTypes": [
                "bulletForce",
                "reloadRate",
                "fireRate",
                "ammoSize",
                "ammoTotal",
                "movementSpeed",
                "maxStamina"
            ],
            "effects": {
                "use": {
                    "particles": {

                    },
                    "sound": {

                    }
                },
                "reload": {
                    "particles": {

                    },
                    "sound": {

                    }
                },
                "empty": {
                    "particles": {

                    },
                    "sound": {

                    }
                }
            },
            "canBeUsedBy": [
                "human"
            ],
            "attributes": {

            },
            "animations": {
                "TpsmgGVfi5": {
                    "name": "default",
                    "frames": [
                        1
                    ],
                    "loopCount": 0,
                    "framesPerSecond": 0
                }
            },
            "cellSheet": {
                "url": "https://s3-us-west-1.amazonaws.com/modd/halloween-0.18/spritesheet/potato_gun.png",
                "rowCount": 1,
                "columnCount": 1
            },
            "states": {
                "dropped": {
                    "sound": {

                    },
                    "particles": {

                    },
                    "body": "dropped",
                    "animation": "TpsmgGVfi5",
                    "name": "dropped"
                },
                "unSelected": {
                    "sound": {

                    },
                    "particles": {

                    },
                    "body": "unSelected",
                    "animation": "TpsmgGVfi5",
                    "name": "unselected"
                },
                "selected": {
                    "sound": {

                    },
                    "particles": {

                    },
                    "body": "selected",
                    "animation": "TpsmgGVfi5",
                    "name": "selected"
                }
            },
            "bodies": {
                "dropped": {
                    "type": "static",
                    "collidesWith": {
                        "debris": false,
                        "walls": false,
                        "projectiles": false,
                        "items": false,
                        "units": true
                    },
                    "itemAnchor": {
                        "y": 0,
                        "x": 0
                    },
                    "unitAnchor": {
                        "rotation": 0,
                        "y": 34,
                        "x": 0
                    },
                    "jointType": "none",
                    "rotationSpeed": 3,
                    "width": 12,
                    "height": 40,
                    "holdPosition": {
                        "rotation": 0,
                        "y": 40,
                        "x": 0
                    },
                    "linearDamping": 1,
                    "angularDamping": 1,
                    "restitution": 1,
                    "density": 1,
                    "isTangible": false,
                    "isFlying": false,
                    "carriedBy": [
                        "human",
                        "PhuHFB46b2"
                    ],
                    "friction": 0,
                    "typeWhenDrop": "dynamic",
                    "z-index": {
                        "depth": 1,
                        "layer": 1
                    },
                    "fixedRotation": false,
                    "name": "dropped",
                    "bullet": false,
                    "allowSleep": true,
                    "spriteScale": 1,
                    "fixtures": [
                        {
                            "density": 1,
                            "friction": 0.01,
                            "restitution": 0.01,
                            "shape": {
                                "type": "rectangle"
                            },
                            "isSensor": true
                        }
                    ]
                },
                "unSelected": {
                    "type": "none",
                    "collidesWith": {
                        "debris": false,
                        "walls": true,
                        "projectiles": true,
                        "items": true,
                        "units": true
                    },
                    "itemAnchor": {
                        "y": 0,
                        "x": 0
                    },
                    "unitAnchor": {
                        "rotation": 0,
                        "y": 33,
                        "x": 0
                    },
                    "jointType": "weldJoint",
                    "rotationSpeed": 3,
                    "width": 12,
                    "height": 40,
                    "holdPosition": {
                        "rotation": 0,
                        "y": 40,
                        "x": 0
                    },
                    "linearDamping": 1,
                    "angularDamping": 1,
                    "restitution": 1,
                    "density": 1,
                    "isTangible": false,
                    "isFlying": false,
                    "carriedBy": [
                        "human",
                        "PhuHFB46b2"
                    ],
                    "friction": 0,
                    "typeWhenDrop": "dynamic",
                    "z-index": {
                        "depth": 3,
                        "layer": 3
                    },
                    "fixedRotation": false,
                    "name": "unselected"
                },
                "selected": {
                    "fixtures": [
                        {
                            "shape": {
                                "type": "rectangle"
                            },
                            "restitution": 0,
                            "friction": 0,
                            "density": 1,
                            "isSensor": false
                        }
                    ],
                    "spriteScale": 1,
                    "allowSleep": true,
                    "bullet": false,
                    "type": "dynamic",
                    "collidesWith": {
                        "debris": false,
                        "walls": false,
                        "projectiles": true,
                        "items": true,
                        "units": true
                    },
                    "itemAnchor": {
                        "y": 0,
                        "x": 0
                    },
                    "unitAnchor": {
                        "rotation": 0,
                        "y": 34,
                        "x": 0
                    },
                    "jointType": "weldJoint",
                    "rotationSpeed": 3,
                    "width": 12,
                    "height": 40,
                    "holdPosition": {
                        "rotation": 0,
                        "y": 40,
                        "x": 0
                    },
                    "linearDamping": 0,
                    "angularDamping": 1,
                    "restitution": 1,
                    "density": 1,
                    "isTangible": false,
                    "isFlying": false,
                    "carriedBy": [
                        "human",
                        "PhuHFB46b2"
                    ],
                    "friction": 0,
                    "typeWhenDrop": "dynamic",
                    "z-index": {
                        "depth": 3,
                        "layer": 3
                    },
                    "fixedRotation": false,
                    "name": "selected"
                }
            },
            "description": "Locally grown organic potatoes! One shoot costs 25 points each (left click)",
            "deployMethod": "applyForce"
        },
        "AXgwzWco1k": {
            "hideIfUnaffordable": false,
            "description": "You can use shotgun to boost yourself, or possibly going through the walls",
            "bodies": {
                "selected": {
                    "name": "selected",
                    "fixedRotation": false,
                    "z-index": {
                        "layer": 3,
                        "depth": 3
                    },
                    "typeWhenDrop": "dynamic",
                    "type": "spriteOnly",
                    "friction": 0,
                    "collidesWith": {
                        "units": true,
                        "items": true,
                        "projectiles": true,
                        "walls": true,
                        "debris": false
                    },
                    "unitAnchor": {
                        "rotation": 0,
                        "y": 32,
                        "x": 0
                    },
                    "rotationSpeed": 3,
                    "itemAnchor": {
                        "y": 30,
                        "x": 0
                    },
                    "jointType": "none",
                    "width": 14,
                    "height": 40,
                    "holdPosition": {
                        "rotation": 0,
                        "y": 33,
                        "x": 0
                    },
                    "linearDamping": 1,
                    "angularDamping": 1,
                    "restitution": 1,
                    "density": 1,
                    "isTangible": false,
                    "isFlying": false,
                    "carriedBy": [
                        "human"
                    ],
                    "bullet": false,
                    "allowSleep": true,
                    "spriteScale": 1,
                    "fixtures": [
                        {
                            "density": 1,
                            "friction": 0.01,
                            "restitution": 0.01,
                            "shape": {
                                "type": "rectangle"
                            },
                            "isSensor": false
                        }
                    ]
                },
                "dropped": {
                    "fixtures": [
                        {
                            "isSensor": true,
                            "shape": {
                                "type": "rectangle"
                            },
                            "restitution": 0.01,
                            "friction": 0.01,
                            "density": 1
                        }
                    ],
                    "spriteScale": 1,
                    "allowSleep": true,
                    "bullet": false,
                    "name": "dropped",
                    "fixedRotation": false,
                    "z-index": {
                        "layer": 1,
                        "depth": 1
                    },
                    "typeWhenDrop": "dynamic",
                    "type": "static",
                    "friction": 0,
                    "collidesWith": {
                        "units": true,
                        "items": false,
                        "projectiles": false,
                        "walls": false,
                        "debris": false
                    },
                    "unitAnchor": {
                        "rotation": 0,
                        "y": 32,
                        "x": 0
                    },
                    "rotationSpeed": 1,
                    "itemAnchor": {
                        "y": 30,
                        "x": 0
                    },
                    "jointType": "none",
                    "width": 14,
                    "height": 40,
                    "holdPosition": {
                        "rotation": 0,
                        "y": 33,
                        "x": 0
                    },
                    "linearDamping": 1,
                    "angularDamping": 1,
                    "restitution": 1,
                    "density": 1,
                    "isTangible": false,
                    "isFlying": false,
                    "carriedBy": [
                        "human"
                    ]
                }
            },
            "states": {
                "selected": {
                    "name": "selected",
                    "animation": "TpsmgGVfi5",
                    "body": "selected",
                    "particles": {

                    },
                    "sound": {

                    }
                },
                "unSelected": {
                    "name": "unselected",
                    "animation": "TpsmgGVfi5",
                    "body": "unSelected",
                    "particles": {

                    },
                    "sound": {

                    }
                },
                "dropped": {
                    "name": "dropped",
                    "animation": "TpsmgGVfi5",
                    "body": "dropped",
                    "particles": {

                    },
                    "sound": {

                    }
                }
            },
            "cellSheet": {
                "columnCount": 1,
                "rowCount": 1,
                "url": "https://s3-us-west-1.amazonaws.com/modd/halloween-0.18/spritesheet/shotgun.png"
            },
            "animations": {
                "TpsmgGVfi5": {
                    "framesPerSecond": 0,
                    "loopCount": 0,
                    "frames": [
                        1
                    ],
                    "name": "default"
                }
            },
            "attributes": {

            },
            "knockbackForce": 350,
            "bulletDistance": 1300,
            "lifeSpan": 60000,
            "particles": {
                "9ijSYCQ9NH": {
                    "name": "shell",
                    "color": "#000000",
                    "lifeBase": 700,
                    "quantityBase": 100,
                    "quantityTimespan": 700,
                    "deathOpacityBase": ".1",
                    "mountPosition": {
                        "x": 0,
                        "y": 0
                    },
                    "velocityVector": {
                        "baseVector": {
                            "x": ".01",
                            "y": 0
                        },
                        "minVector": {
                            "x": 0,
                            "y": -0.01
                        },
                        "maxVector": {
                            "x": ".03",
                            "y": 0.01
                        }
                    }
                },
                "87BiLybZhy": {
                    "velocityVector": {
                        "maxVector": {
                            "y": -5,
                            "x": 1
                        },
                        "minVector": {
                            "y": 0,
                            "x": -1
                        },
                        "baseVector": {
                            "y": 0,
                            "x": 0
                        }
                    },
                    "mountPosition": {
                        "y": 30,
                        "x": 0
                    },
                    "deathOpacityBase": 1,
                    "quantityTimespan": 30,
                    "quantityBase": 10,
                    "lifeBase": 70,
                    "color": "#636363",
                    "name": "bullet"
                },
                "7pA9mm1MLG": {
                    "velocityVector": {
                        "maxVector": {
                            "y": 1,
                            "x": 1
                        },
                        "minVector": {
                            "y": -1,
                            "x": -1
                        },
                        "baseVector": {
                            "y": 0,
                            "x": 0
                        }
                    },
                    "mountPosition": {
                        "y": 30,
                        "x": 0
                    },
                    "deathOpacityBase": 1,
                    "quantityTimespan": 30,
                    "quantityBase": 5,
                    "lifeBase": 30,
                    "color": "#f4ff00",
                    "name": "spark"
                },
                "k4HSd1axqA": {
                    "name": "spark",
                    "color": "#f4ff00",
                    "lifeBase": 50,
                    "quantityBase": 40,
                    "quantityTimespan": 70,
                    "deathOpacityBase": 0.5,
                    "mountPosition": {
                        "x": 0,
                        "y": 35
                    },
                    "velocityVector": {
                        "baseVector": {
                            "x": 0,
                            "y": 0
                        },
                        "minVector": {
                            "x": -1,
                            "y": -1
                        },
                        "maxVector": {
                            "x": 1,
                            "y": 1
                        }
                    }
                },
                "lUXvIVnU6G": {
                    "velocityVector": {
                        "maxVector": {
                            "y": 0,
                            "x": 0.05
                        },
                        "minVector": {
                            "y": -1,
                            "x": -0.05
                        },
                        "baseVector": {
                            "y": -1,
                            "x": 0
                        }
                    },
                    "mountPosition": {
                        "y": 35,
                        "x": 0
                    },
                    "deathOpacityBase": 1,
                    "quantityTimespan": 100,
                    "quantityBase": 300,
                    "lifeBase": 100,
                    "color": "#433100",
                    "name": "bullet"
                }
            },
            "damage": 50,
            "bulletStartPosition": {
                "y": 0,
                "x": 0
            },
            "canBePurchasedBy": [
                "w1NiT3YV0e"
            ],
            "name": "Shotgun",
            "handle": "shotgun",
            "texture": "https://s3-us-west-1.amazonaws.com/modd/halloween-0.18/spritesheet/shotgun.png",
            "hasParticles": true,
            "isStackable": false,
            "isPurchasable": true,
            "isGun": true,
            "hits": [
                "sick",
                "zombie",
                "zombie_hulk",
                "zombie_king",
                "zombie_ghost"
            ],
            "type": "weapon",
            "spawnChance": 0.04,
            "ammoSize": 8,
            "ammo": 8,
            "ammoTotal": 24,
            "reloadRate": 2500,
            "fireRate": 1400,
            "recoilForce": 6500,
            "bulletType": "raycast",
            "distanceStart": 30,
            "distanceEnd": 300,
            "bulletForce": 30,
            "penetration": false,
            "sound": {
                "fire": "Kh8BAA5nzJ",
                "reload": "XnhpTlcLSw",
                "empty": "VIf95XFVqd",
                "use": "Kh8BAA5nzJ",
                "nppwtuQaPz": {
                    "name": "Fire",
                    "file": "https://modd.s3.amazonaws.com/asset/sound/1517548547928_fire_shotgun.mp3"
                },
                "GyCivqsuR8": {
                    "file": "https://modd.s3.amazonaws.com/asset/sound/1517544292301_reload.mp3",
                    "name": "Reload"
                },
                "zjlCUPiCk0": {
                    "file": "https://modd.s3.amazonaws.com/asset/sound/1517544320311_fire_empty.mp3",
                    "name": "Out of ammo"
                }
            },
            "body": {
                "name": "Shotgun",
                "fixedRotation": false,
                "z-index": {
                    "depth": 4,
                    "layer": 3
                },
                "typeWhenDrop": "dynamic",
                "type": "dynamic",
                "friction": 0,
                "collidesWith": {
                    "walls": false,
                    "projectiles": false,
                    "items": false,
                    "units": false
                },
                "unitAnchor": {
                    "rotation": 0,
                    "y": 33,
                    "x": 0
                },
                "rotationSpeed": 3,
                "itemAnchor": {
                    "y": 30,
                    "x": 0
                },
                "jointType": "none",
                "width": 16,
                "height": 36,
                "holdPosition": {
                    "rotation": 0,
                    "y": 33,
                    "x": 0
                },
                "linearDamping": 1,
                "angularDamping": 1,
                "restitution": 1,
                "density": 1,
                "isTangible": false,
                "isFlying": false,
                "carriedBy": [
                    "human"
                ]
            },
            "buffTypes": [
                "bulletForce",
                "recoilForce",
                "reloadRate",
                "fireRate",
                "distanceEnd",
                "ammoSize",
                "ammoTotal",
                "stunChance",
                "slowChance",
                "maxStamina"
            ],
            "effects": {
                "use": {
                    "sound": {
                        "nppwtuQaPz": {
                            "name": "Fire",
                            "file": "https://modd.s3.amazonaws.com/asset/sound/1518323082483_fire_shotgun.mp3"
                        }
                    },
                    "particles": {
                        "k4HSd1axqA": {
                            "dimensions": {
                                "height": 0,
                                "width": 0
                            },
                            "name": "spark",
                            "color": "#f4ff00",
                            "lifeBase": 50,
                            "quantityBase": 40,
                            "quantityTimespan": 70,
                            "deathOpacityBase": 0.5,
                            "mountPosition": {
                                "x": 0,
                                "y": 35
                            },
                            "velocityVector": {
                                "baseVector": {
                                    "x": 0,
                                    "y": 0
                                },
                                "minVector": {
                                    "x": -1,
                                    "y": -1
                                },
                                "maxVector": {
                                    "x": 1,
                                    "y": 1
                                }
                            }
                        },
                        "lUXvIVnU6G": {
                            "name": "bullet",
                            "color": "#ffc729",
                            "lifeBase": 500,
                            "quantityBase": 80,
                            "quantityTimespan": 500,
                            "deathOpacityBase": 1,
                            "mountPosition": {
                                "x": 0,
                                "y": 20
                            },
                            "velocityVector": {
                                "baseVector": {
                                    "x": 0,
                                    "y": -1
                                },
                                "minVector": {
                                    "x": -0.35,
                                    "y": -1
                                },
                                "maxVector": {
                                    "x": 0.35,
                                    "y": 0
                                }
                            },
                            "dimensions": {
                                "width": 0,
                                "height": 0
                            }
                        },
                        "9ijSYCQ9NH": {
                            "name": "shell",
                            "color": "#000000",
                            "lifeBase": 700,
                            "quantityBase": 100,
                            "quantityTimespan": 700,
                            "deathOpacityBase": 0.1,
                            "mountPosition": {
                                "x": 0,
                                "y": 0
                            },
                            "velocityVector": {
                                "baseVector": {
                                    "x": 0.01,
                                    "y": 0
                                },
                                "minVector": {
                                    "x": 0,
                                    "y": -0.01
                                },
                                "maxVector": {
                                    "x": 0.03,
                                    "y": 0.01
                                }
                            },
                            "dimensions": {
                                "width": 5,
                                "height": 15
                            }
                        }
                    }
                },
                "fire": {
                    "particles": {
                        "k4HSd1axqA": {
                            "name": "spark",
                            "color": "#f4ff00",
                            "lifeBase": 50,
                            "quantityBase": 40,
                            "quantityTimespan": 70,
                            "deathOpacityBase": 0.5,
                            "mountPosition": {
                                "x": 0,
                                "y": 35
                            },
                            "velocityVector": {
                                "baseVector": {
                                    "x": 0,
                                    "y": 0
                                },
                                "minVector": {
                                    "x": -1,
                                    "y": -1
                                },
                                "maxVector": {
                                    "x": 1,
                                    "y": 1
                                }
                            }
                        },
                        "lUXvIVnU6G": {
                            "velocityVector": {
                                "maxVector": {
                                    "y": 0,
                                    "x": 0.05
                                },
                                "minVector": {
                                    "y": -1,
                                    "x": -0.05
                                },
                                "baseVector": {
                                    "y": -1,
                                    "x": 0
                                }
                            },
                            "mountPosition": {
                                "y": 35,
                                "x": 0
                            },
                            "deathOpacityBase": 1,
                            "quantityTimespan": 100,
                            "quantityBase": 300,
                            "lifeBase": 100,
                            "color": "#433100",
                            "name": "bullet"
                        },
                        "9ijSYCQ9NH": {
                            "name": "shell",
                            "color": "#000000",
                            "lifeBase": 700,
                            "quantityBase": 100,
                            "quantityTimespan": 700,
                            "deathOpacityBase": ".1",
                            "mountPosition": {
                                "x": 0,
                                "y": 0
                            },
                            "velocityVector": {
                                "baseVector": {
                                    "x": ".01",
                                    "y": 0
                                },
                                "minVector": {
                                    "x": 0,
                                    "y": -0.01
                                },
                                "maxVector": {
                                    "x": ".03",
                                    "y": 0.01
                                }
                            }
                        }
                    },
                    "sound": {

                    }
                },
                "reload": {
                    "particles": {

                    },
                    "sound": {
                        "GyCivqsuR8": {
                            "file": "https://modd.s3.amazonaws.com/asset/sound/1517544292301_reload.mp3",
                            "name": "Reload"
                        }
                    }
                },
                "empty": {
                    "particles": {

                    },
                    "sound": {
                        "zjlCUPiCk0": {
                            "file": "https://modd.s3.amazonaws.com/asset/sound/1517544320311_fire_empty.mp3",
                            "name": "Out of ammo"
                        }
                    }
                }
            },
            "quantity": 30,
            "maxQuantity": 300,
            "autoUpdateQuantity": false,
            "cost": {

            },
            "carriedBy": [
                "human"
            ],
            "variables": {

            },
            "inventoryImage": "",
            "canBeUsedBy": [
                "human"
            ],
            "deployMethod": "setVelocity",
            "projectileType": ""
        },
        "czcULq1xee": {
            "inventoryImage": "",
            "variables": {

            },
            "carriedBy": [
                "human"
            ],
            "bonus": {
                "passive": {
                    "unitAttribute": {

                    },
                    "playerAttribute": {

                    }
                },
                "consume": {
                    "unitAttribute": {

                    },
                    "playerAttribute": {

                    }
                }
            },
            "canBePurchasedBy": [
                "w1NiT3YV0e"
            ],
            "name": "Crowbar",
            "handle": "baseball_bat",
            "texture": "https://s3-us-west-1.amazonaws.com/modd/halloween-0.18/spritesheet/baseball_bat.png",
            "isStackable": false,
            "isPurchasable": true,
            "isGun": false,
            "type": "weapon",
            "spawnChance": 0.07,
            "sound": {
                "fire": null
            },
            "body": {
                "friction": 0,
                "collidesWith": {
                    "debris": true,
                    "item": true,
                    "unit": true,
                    "walls": true,
                    "projectiles": true,
                    "items": true,
                    "units": true
                },
                "itemAnchor": {
                    "y": 0,
                    "x": 0
                },
                "unitAnchor": {
                    "rotation": 0,
                    "y": 30,
                    "x": 0
                },
                "jointType": "weldJoint",
                "rotationSpeed": 3,
                "carriedBy": [
                    "human",
                    "PhuHFB46b2"
                ],
                "isFlying": false,
                "isTangible": true,
                "density": 1,
                "restitution": 1,
                "angularDamping": 1,
                "linearDamping": 1,
                "holdPosition": {
                    "rotation": 0,
                    "y": 33,
                    "x": 0
                },
                "height": 42,
                "width": 12,
                "type": "dynamic",
                "typeWhenDrop": "dynamic",
                "z-index": {
                    "layer": 3,
                    "depth": 4
                },
                "fixedRotation": false,
                "name": "Baseball Bat"
            },
            "buffTypes": [
                "height",
                "stunChance",
                "slowChance",
                "movementSpeed",
                "immunity",
                "maxStamina"
            ],
            "bulletStartPosition": {
                "x": 0,
                "y": 0
            },
            "hits": [],
            "damage": 2,
            "attributes": {

            },
            "animations": {
                "TpsmgGVfi5": {
                    "name": "default",
                    "frames": [
                        1
                    ],
                    "loopCount": 0,
                    "framesPerSecond": 0
                }
            },
            "cellSheet": {
                "url": "https://modd.s3.amazonaws.com/asset/spriteImage/1516617831457_crowbar.png",
                "rowCount": 0,
                "columnCount": 0
            },
            "states": {
                "dropped": {
                    "sound": {

                    },
                    "particles": {

                    },
                    "body": "dropped",
                    "animation": "TpsmgGVfi5",
                    "name": "dropped"
                },
                "unSelected": {
                    "sound": {

                    },
                    "particles": {

                    },
                    "body": "unSelected",
                    "animation": "TpsmgGVfi5",
                    "name": "unselected"
                },
                "selected": {
                    "sound": {

                    },
                    "particles": {

                    },
                    "body": "selected",
                    "animation": "TpsmgGVfi5",
                    "name": "selected"
                }
            },
            "bodies": {
                "dropped": {
                    "fixtures": [
                        {
                            "isSensor": true,
                            "shape": {
                                "type": "rectangle"
                            },
                            "restitution": 0.01,
                            "friction": 0.01,
                            "density": 1
                        }
                    ],
                    "spriteScale": 1,
                    "allowSleep": true,
                    "bullet": false,
                    "friction": 0,
                    "collidesWith": {
                        "debris": false,
                        "walls": false,
                        "projectiles": false,
                        "items": false,
                        "units": false
                    },
                    "itemAnchor": {
                        "y": 0,
                        "x": 0
                    },
                    "unitAnchor": {
                        "rotation": 0,
                        "y": 32,
                        "x": 0
                    },
                    "jointType": "none",
                    "rotationSpeed": 1,
                    "carriedBy": [
                        "human",
                        "PhuHFB46b2"
                    ],
                    "isFlying": false,
                    "isTangible": true,
                    "density": 1,
                    "restitution": 1,
                    "angularDamping": 1,
                    "linearDamping": 1,
                    "holdPosition": {
                        "rotation": 0,
                        "y": 33,
                        "x": 0
                    },
                    "height": 36,
                    "width": 10,
                    "type": "static",
                    "typeWhenDrop": "dynamic",
                    "z-index": {
                        "depth": 1,
                        "layer": 1
                    },
                    "fixedRotation": false,
                    "name": "dropped"
                },
                "unSelected": {
                    "friction": 0,
                    "collidesWith": {
                        "debris": false,
                        "walls": true,
                        "projectiles": true,
                        "items": true,
                        "units": true
                    },
                    "itemAnchor": {
                        "y": 0,
                        "x": 0
                    },
                    "unitAnchor": {
                        "rotation": 0,
                        "y": 30,
                        "x": 0
                    },
                    "jointType": "weldJoint",
                    "rotationSpeed": 3,
                    "carriedBy": [
                        "human",
                        "PhuHFB46b2"
                    ],
                    "isFlying": false,
                    "isTangible": true,
                    "density": 1,
                    "restitution": 1,
                    "angularDamping": 1,
                    "linearDamping": 1,
                    "holdPosition": {
                        "rotation": 0,
                        "y": 33,
                        "x": 0
                    },
                    "height": 42,
                    "width": 12,
                    "type": "none",
                    "typeWhenDrop": "dynamic",
                    "z-index": {
                        "depth": 3,
                        "layer": 3
                    },
                    "fixedRotation": false,
                    "name": "unselected"
                },
                "selected": {
                    "fixtures": [
                        {
                            "shape": {
                                "type": "rectangle"
                            },
                            "restitution": 0.01,
                            "friction": 0.01,
                            "density": 1,
                            "isSensor": false
                        }
                    ],
                    "spriteScale": 1,
                    "allowSleep": true,
                    "bullet": false,
                    "friction": 0,
                    "collidesWith": {
                        "debris": true,
                        "walls": false,
                        "projectiles": true,
                        "items": true,
                        "units": true
                    },
                    "itemAnchor": {
                        "y": 0,
                        "x": 0
                    },
                    "unitAnchor": {
                        "rotation": 0,
                        "y": 32,
                        "x": 0
                    },
                    "jointType": "weldJoint",
                    "rotationSpeed": 2,
                    "carriedBy": [
                        "human",
                        "PhuHFB46b2"
                    ],
                    "isFlying": false,
                    "isTangible": true,
                    "density": 1,
                    "restitution": 1,
                    "angularDamping": 1,
                    "linearDamping": 1,
                    "holdPosition": {
                        "rotation": 0,
                        "y": 33,
                        "x": 0
                    },
                    "height": 36,
                    "width": 10,
                    "type": "dynamic",
                    "typeWhenDrop": "dynamic",
                    "z-index": {
                        "depth": 3,
                        "layer": 3
                    },
                    "fixedRotation": false,
                    "name": "selected"
                }
            },
            "quantity": null,
            "maxQuantity": null,
            "description": "Use the crowbar to move objects",
            "fireRate": 1000,
            "cost": {
                "quantity": 0
            },
            "effects": {
                "use": {
                    "particles": {

                    },
                    "sound": {

                    },
                    "animation": ""
                },
                "reload": {
                    "particles": {

                    },
                    "sound": {

                    },
                    "animation": ""
                },
                "empty": {
                    "particles": {

                    },
                    "sound": {

                    },
                    "animation": ""
                }
            },
            "lifeSpan": 60000,
            "removeWhenEmpty": false,
            "isUsedOnPickup": false,
            "hideIfUnaffordable": false,
            "deployMethod": "setVelocity"
        },
        "DJyf6xBq1E": {
            "inventoryImage": "",
            "variables": {

            },
            "carriedBy": [
                "human"
            ],
            "bonus": {
                "passive": {
                    "unitAttribute": {

                    },
                    "playerAttribute": {

                    }
                },
                "consume": {
                    "unitAttribute": {

                    },
                    "playerAttribute": {

                    }
                }
            },
            "canBePurchasedBy": [
                "w1NiT3YV0e"
            ],
            "name": "Swordfish",
            "handle": "baseball_bat",
            "texture": "https://s3-us-west-1.amazonaws.com/modd/halloween-0.18/spritesheet/baseball_bat.png",
            "isStackable": false,
            "isPurchasable": true,
            "isGun": false,
            "type": "weapon",
            "spawnChance": 0.07,
            "sound": {
                "fire": null
            },
            "body": {
                "friction": 0,
                "collidesWith": {
                    "debris": true,
                    "item": true,
                    "unit": true,
                    "walls": true,
                    "projectiles": true,
                    "items": true,
                    "units": true
                },
                "itemAnchor": {
                    "y": 0,
                    "x": 0
                },
                "unitAnchor": {
                    "rotation": 0,
                    "y": 30,
                    "x": 0
                },
                "jointType": "weldJoint",
                "rotationSpeed": 3,
                "carriedBy": [
                    "human",
                    "PhuHFB46b2"
                ],
                "isFlying": false,
                "isTangible": true,
                "density": 1,
                "restitution": 1,
                "angularDamping": 1,
                "linearDamping": 1,
                "holdPosition": {
                    "rotation": 0,
                    "y": 33,
                    "x": 0
                },
                "height": 42,
                "width": 12,
                "type": "dynamic",
                "typeWhenDrop": "dynamic",
                "z-index": {
                    "layer": 3,
                    "depth": 4
                },
                "fixedRotation": false,
                "name": "Baseball Bat"
            },
            "buffTypes": [
                "height",
                "stunChance",
                "slowChance",
                "movementSpeed",
                "immunity",
                "maxStamina"
            ],
            "bulletStartPosition": {
                "x": 0,
                "y": 0
            },
            "hits": [],
            "damage": 2,
            "attributes": {

            },
            "animations": {
                "TpsmgGVfi5": {
                    "name": "default",
                    "frames": [
                        1
                    ],
                    "loopCount": 0,
                    "framesPerSecond": 0
                }
            },
            "cellSheet": {
                "url": "https://modd.s3.amazonaws.com/asset/spriteImage/1570543704742_1.png",
                "rowCount": 1,
                "columnCount": 1
            },
            "states": {
                "dropped": {
                    "sound": {

                    },
                    "particles": {

                    },
                    "body": "dropped",
                    "animation": "TpsmgGVfi5",
                    "name": "dropped"
                },
                "unSelected": {
                    "sound": {

                    },
                    "particles": {

                    },
                    "body": "unSelected",
                    "animation": "TpsmgGVfi5",
                    "name": "unselected"
                },
                "selected": {
                    "sound": {

                    },
                    "particles": {

                    },
                    "body": "selected",
                    "animation": "TpsmgGVfi5",
                    "name": "selected"
                }
            },
            "bodies": {
                "dropped": {
                    "fixtures": [
                        {
                            "isSensor": true,
                            "shape": {
                                "type": "rectangle"
                            },
                            "restitution": 0.01,
                            "friction": 0.01,
                            "density": 1
                        }
                    ],
                    "spriteScale": 1,
                    "allowSleep": true,
                    "bullet": false,
                    "friction": 0,
                    "collidesWith": {
                        "debris": false,
                        "walls": false,
                        "projectiles": false,
                        "items": false,
                        "units": false
                    },
                    "itemAnchor": {
                        "y": 0,
                        "x": 0
                    },
                    "unitAnchor": {
                        "rotation": 0,
                        "y": 42,
                        "x": 0
                    },
                    "jointType": "none",
                    "rotationSpeed": 3,
                    "carriedBy": [
                        "human",
                        "PhuHFB46b2"
                    ],
                    "isFlying": false,
                    "isTangible": true,
                    "density": 1,
                    "restitution": 1,
                    "angularDamping": 1,
                    "linearDamping": 1,
                    "holdPosition": {
                        "rotation": 0,
                        "y": 33,
                        "x": 0
                    },
                    "height": 53,
                    "width": 20,
                    "type": "static",
                    "typeWhenDrop": "dynamic",
                    "z-index": {
                        "depth": 1,
                        "layer": 1
                    },
                    "fixedRotation": false,
                    "name": "dropped"
                },
                "unSelected": {
                    "friction": 0,
                    "collidesWith": {
                        "debris": false,
                        "walls": true,
                        "projectiles": true,
                        "items": true,
                        "units": true
                    },
                    "itemAnchor": {
                        "y": 0,
                        "x": 0
                    },
                    "unitAnchor": {
                        "rotation": 0,
                        "y": 30,
                        "x": 0
                    },
                    "jointType": "weldJoint",
                    "rotationSpeed": 3,
                    "carriedBy": [
                        "human",
                        "PhuHFB46b2"
                    ],
                    "isFlying": false,
                    "isTangible": true,
                    "density": 1,
                    "restitution": 1,
                    "angularDamping": 1,
                    "linearDamping": 1,
                    "holdPosition": {
                        "rotation": 0,
                        "y": 33,
                        "x": 0
                    },
                    "height": 42,
                    "width": 12,
                    "type": "none",
                    "typeWhenDrop": "dynamic",
                    "z-index": {
                        "depth": 3,
                        "layer": 3
                    },
                    "fixedRotation": false,
                    "name": "unselected"
                },
                "selected": {
                    "fixtures": [
                        {
                            "shape": {
                                "type": "rectangle"
                            },
                            "restitution": 0,
                            "friction": 0,
                            "density": "0.35",
                            "isSensor": false
                        }
                    ],
                    "spriteScale": 1,
                    "allowSleep": false,
                    "bullet": true,
                    "friction": 0,
                    "collidesWith": {
                        "debris": true,
                        "walls": false,
                        "projectiles": true,
                        "items": true,
                        "units": true
                    },
                    "itemAnchor": {
                        "y": 0,
                        "x": 0
                    },
                    "unitAnchor": {
                        "rotation": 0,
                        "y": 42,
                        "x": 0
                    },
                    "jointType": "weldJoint",
                    "rotationSpeed": 3,
                    "carriedBy": [
                        "human",
                        "PhuHFB46b2"
                    ],
                    "isFlying": false,
                    "isTangible": true,
                    "density": 1,
                    "restitution": 1,
                    "angularDamping": 0,
                    "linearDamping": 0,
                    "holdPosition": {
                        "rotation": 0,
                        "y": 33,
                        "x": 0
                    },
                    "height": 53,
                    "width": 20,
                    "type": "dynamic",
                    "typeWhenDrop": "dynamic",
                    "z-index": {
                        "depth": 3,
                        "layer": 3
                    },
                    "fixedRotation": false,
                    "name": "selected"
                }
            },
            "quantity": null,
            "maxQuantity": null,
            "description": "Use the swordfish to move objects",
            "fireRate": 1000,
            "cost": {
                "quantity": 0
            },
            "effects": {
                "destroy": {
                    "animation": "",
                    "sound": {

                    },
                    "projectileType": ""
                },
                "create": {
                    "animation": "",
                    "sound": {

                    },
                    "projectileType": ""
                },
                "use": {
                    "particles": {

                    },
                    "sound": {

                    },
                    "animation": ""
                },
                "reload": {
                    "particles": {

                    },
                    "sound": {

                    },
                    "animation": ""
                },
                "empty": {
                    "particles": {

                    },
                    "sound": {

                    },
                    "animation": ""
                }
            },
            "lifeSpan": 60000,
            "removeWhenEmpty": false,
            "isUsedOnPickup": false,
            "hideIfUnaffordable": false,
            "deployMethod": "setVelocity"
        },
        "WMyjavpDLl": {
            "inventoryImage": "",
            "variables": {

            },
            "carriedBy": [
                "human"
            ],
            "attributes": {

            },
            "penetration": false,
            "bulletDistance": 1300,
            "knockbackForce": 0,
            "fireRate": 70,
            "recoilForce": 0,
            "reloadRate": 2800,
            "ammoTotal": 1,
            "ammo": 1,
            "ammoSize": 1,
            "bulletType": "raycast",
            "canBeUsedBy": [
                "human"
            ],
            "sound": {
                "fire": null
            },
            "spawnChance": 0.2,
            "isGun": true,
            "body": {
                "friction": 0,
                "width": 20,
                "height": 40,
                "holdPosition": {
                    "x": 0,
                    "y": 33,
                    "rotation": 0
                },
                "linearDamping": 1,
                "angularDamping": 1,
                "restitution": 1,
                "density": 1,
                "isTangible": true,
                "isFlying": false,
                "carriedBy": [
                    "human"
                ],
                "rotationSpeed": 3,
                "jointType": "weldJoint",
                "unitAnchor": {
                    "x": 0,
                    "y": 20,
                    "rotation": 0
                },
                "itemAnchor": {
                    "y": 0,
                    "x": 0
                },
                "collidesWith": {
                    "units": false,
                    "items": false,
                    "projectiles": false,
                    "walls": false,
                    "unit": false,
                    "item": false
                },
                "type": "dynamic",
                "name": "Pill"
            },
            "consumeBonus": {
                "attributes": {
                    "36S6GnLWqK": 70,
                    "K2mih60v2P": 70
                },
                "playerAttributeBonus": {

                },
                "unitAttributeBonus": {

                }
            },
            "isConsumedImmediately": false,
            "type": "consumable",
            "isPurchasable": true,
            "isStackable": false,
            "texture": "https://modd.s3.amazonaws.com/asset/spriteImage/1516617820395_pill.png",
            "handle": "pill",
            "name": "Coin",
            "canBePurchasedBy": [
                "w1NiT3YV0e"
            ],
            "lifeSpan": 60000,
            "removeWhenEmpty": true,
            "bulletStartPosition": {
                "x": 0,
                "y": 0
            },
            "hits": [],
            "damage": 2,
            "bonus": {
                "consume": {
                    "coin": 1,
                    "playerAttribute": {

                    },
                    "unitAttribute": {

                    }
                },
                "passive": {
                    "playerAttribute": {

                    },
                    "unitAttribute": {

                    }
                },
                "isConsumedImmediately": false
            },
            "effects": {
                "use": {
                    "projectileType": "",
                    "sound": {

                    },
                    "animation": "",
                    "particles": {

                    }
                },
                "create": {
                    "projectileType": "",
                    "sound": {

                    },
                    "animation": ""
                },
                "destroy": {
                    "projectileType": "",
                    "sound": {

                    },
                    "animation": ""
                },
                "reload": {
                    "animation": "",
                    "particles": {

                    },
                    "sound": {

                    }
                },
                "empty": {
                    "animation": "",
                    "particles": {

                    },
                    "sound": {

                    }
                }
            },
            "animations": {
                "TpsmgGVfi5": {
                    "name": "default",
                    "frames": [
                        1
                    ],
                    "loopCount": 0,
                    "framesPerSecond": 0
                }
            },
            "cellSheet": {
                "url": "https://modd.s3.amazonaws.com/asset/spriteImage/1574295749772_Semtítulo.png",
                "rowCount": 1,
                "columnCount": 1
            },
            "states": {
                "dropped": {
                    "sound": {

                    },
                    "particles": {

                    },
                    "body": "dropped",
                    "animation": "TpsmgGVfi5",
                    "name": "dropped"
                },
                "unSelected": {
                    "sound": {

                    },
                    "particles": {

                    },
                    "body": "unSelected",
                    "animation": "TpsmgGVfi5",
                    "name": "unselected"
                },
                "selected": {
                    "sound": {

                    },
                    "particles": {

                    },
                    "body": "selected",
                    "animation": "TpsmgGVfi5",
                    "name": "selected"
                }
            },
            "bodies": {
                "unSelected": {
                    "friction": 0,
                    "collidesWith": {
                        "debris": false,
                        "walls": true,
                        "projectiles": true,
                        "items": true,
                        "units": true
                    },
                    "itemAnchor": {
                        "y": 0,
                        "x": 0
                    },
                    "unitAnchor": {
                        "rotation": 0,
                        "y": 30,
                        "x": 0
                    },
                    "jointType": "weldJoint",
                    "rotationSpeed": 3,
                    "carriedBy": [
                        "human",
                        "PhuHFB46b2"
                    ],
                    "isFlying": false,
                    "isTangible": true,
                    "density": 1,
                    "restitution": 1,
                    "angularDamping": 1,
                    "linearDamping": 1,
                    "holdPosition": {
                        "rotation": 0,
                        "y": 33,
                        "x": 0
                    },
                    "height": 42,
                    "width": 12,
                    "type": "none",
                    "typeWhenDrop": "dynamic",
                    "z-index": {
                        "depth": 3,
                        "layer": 3
                    },
                    "fixedRotation": false,
                    "name": "unselected"
                },
                "dropped": {
                    "fixtures": [
                        {
                            "isSensor": true,
                            "shape": {
                                "type": "rectangle"
                            },
                            "restitution": 0.01,
                            "friction": 0.01,
                            "density": 1
                        }
                    ],
                    "spriteScale": 1,
                    "allowSleep": true,
                    "bullet": false,
                    "fixedRotation": false,
                    "z-index": {
                        "depth": 1,
                        "layer": 1
                    },
                    "friction": 0,
                    "width": 14,
                    "height": 20,
                    "holdPosition": {
                        "x": 0,
                        "y": 33,
                        "rotation": 0
                    },
                    "linearDamping": 1,
                    "angularDamping": 1,
                    "restitution": 1,
                    "density": 1,
                    "isTangible": true,
                    "isFlying": false,
                    "carriedBy": [
                        "human"
                    ],
                    "rotationSpeed": 3,
                    "jointType": "none",
                    "unitAnchor": {
                        "x": 0,
                        "y": 20,
                        "rotation": 0
                    },
                    "itemAnchor": {
                        "x": 0,
                        "y": 0
                    },
                    "collidesWith": {
                        "debris": true,
                        "walls": true,
                        "projectiles": true,
                        "items": true,
                        "units": true
                    },
                    "type": "dynamic",
                    "name": "dropped"
                },
                "selected": {
                    "z-index": {
                        "depth": 3,
                        "layer": 3
                    },
                    "friction": 0,
                    "width": 14,
                    "height": 20,
                    "holdPosition": {
                        "x": 0,
                        "y": 33,
                        "rotation": 0
                    },
                    "linearDamping": 1,
                    "angularDamping": 1,
                    "restitution": 1,
                    "density": 1,
                    "isTangible": true,
                    "isFlying": false,
                    "carriedBy": [
                        "human"
                    ],
                    "rotationSpeed": 3,
                    "jointType": "weldJoint",
                    "unitAnchor": {
                        "x": 0,
                        "y": 29,
                        "rotation": 0
                    },
                    "itemAnchor": {
                        "y": 0,
                        "x": 0
                    },
                    "collidesWith": {
                        "debris": false,
                        "walls": true,
                        "projectiles": true,
                        "items": true,
                        "units": true
                    },
                    "type": "spriteOnly",
                    "name": "selected",
                    "fixedRotation": false,
                    "bullet": false,
                    "allowSleep": true,
                    "spriteScale": 1,
                    "fixtures": [
                        {
                            "density": 1,
                            "friction": 0.01,
                            "restitution": 0.01,
                            "shape": {
                                "type": "rectangle"
                            },
                            "isSensor": true
                        }
                    ]
                }
            },
            "quantity": 1,
            "maxQuantity": 1,
            "description": "Eat and receive 1 modd.io coin! (left click to use)"
        },
        "yarrzbCUwX": {
            "deployMethod": "applyForce",
            "description": "Very useful in a zombie apocalypse! (left click to shoot)",
            "bodies": {
                "selected": {
                    "name": "selected",
                    "fixedRotation": false,
                    "z-index": {
                        "layer": 3,
                        "depth": 3
                    },
                    "typeWhenDrop": "dynamic",
                    "friction": 0,
                    "carriedBy": [
                        "human",
                        "PhuHFB46b2"
                    ],
                    "isFlying": false,
                    "isTangible": false,
                    "density": 1,
                    "restitution": 1,
                    "angularDamping": 1,
                    "linearDamping": 0,
                    "holdPosition": {
                        "x": 0,
                        "y": 40,
                        "rotation": 0
                    },
                    "height": 24,
                    "width": 6,
                    "rotationSpeed": 3,
                    "jointType": "weldJoint",
                    "unitAnchor": {
                        "x": 0,
                        "y": 26,
                        "rotation": 0
                    },
                    "itemAnchor": {
                        "y": 0,
                        "x": 0
                    },
                    "collidesWith": {
                        "units": true,
                        "items": true,
                        "projectiles": true,
                        "walls": false,
                        "debris": false
                    },
                    "type": "spriteOnly",
                    "bullet": false,
                    "allowSleep": true,
                    "spriteScale": 1,
                    "fixtures": [
                        {
                            "isSensor": false,
                            "density": 1,
                            "friction": 0,
                            "restitution": 0,
                            "shape": {
                                "type": "rectangle"
                            }
                        }
                    ]
                },
                "unSelected": {
                    "name": "unselected",
                    "fixedRotation": false,
                    "z-index": {
                        "layer": 3,
                        "depth": 3
                    },
                    "typeWhenDrop": "dynamic",
                    "friction": 0,
                    "carriedBy": [
                        "human",
                        "PhuHFB46b2"
                    ],
                    "isFlying": false,
                    "isTangible": false,
                    "density": 1,
                    "restitution": 1,
                    "angularDamping": 1,
                    "linearDamping": 1,
                    "holdPosition": {
                        "x": 0,
                        "y": 40,
                        "rotation": 0
                    },
                    "height": 40,
                    "width": 12,
                    "rotationSpeed": 3,
                    "jointType": "weldJoint",
                    "unitAnchor": {
                        "x": 0,
                        "y": 33,
                        "rotation": 0
                    },
                    "itemAnchor": {
                        "x": 0,
                        "y": 0
                    },
                    "collidesWith": {
                        "units": true,
                        "items": true,
                        "projectiles": true,
                        "walls": true,
                        "debris": false
                    },
                    "type": "none"
                },
                "dropped": {
                    "fixtures": [
                        {
                            "isSensor": true,
                            "shape": {
                                "type": "rectangle"
                            },
                            "restitution": 0.01,
                            "friction": 0.01,
                            "density": 1
                        }
                    ],
                    "spriteScale": 1,
                    "allowSleep": true,
                    "bullet": false,
                    "name": "dropped",
                    "fixedRotation": false,
                    "z-index": {
                        "layer": 1,
                        "depth": 1
                    },
                    "typeWhenDrop": "dynamic",
                    "friction": 0,
                    "carriedBy": [
                        "human",
                        "PhuHFB46b2"
                    ],
                    "isFlying": false,
                    "isTangible": false,
                    "density": 1,
                    "restitution": 1,
                    "angularDamping": 1,
                    "linearDamping": 1,
                    "holdPosition": {
                        "x": 0,
                        "y": 40,
                        "rotation": 0
                    },
                    "height": 24,
                    "width": 6,
                    "rotationSpeed": 3,
                    "jointType": "none",
                    "unitAnchor": {
                        "x": 0,
                        "y": 26,
                        "rotation": 0
                    },
                    "itemAnchor": {
                        "x": 0,
                        "y": 0
                    },
                    "collidesWith": {
                        "units": true,
                        "items": false,
                        "projectiles": false,
                        "walls": false,
                        "debris": false
                    },
                    "type": "static"
                }
            },
            "states": {
                "selected": {
                    "name": "selected",
                    "animation": "TpsmgGVfi5",
                    "body": "selected",
                    "particles": {

                    },
                    "sound": {

                    }
                },
                "unSelected": {
                    "name": "unselected",
                    "animation": "TpsmgGVfi5",
                    "body": "unSelected",
                    "particles": {

                    },
                    "sound": {

                    }
                },
                "dropped": {
                    "name": "dropped",
                    "animation": "TpsmgGVfi5",
                    "body": "dropped",
                    "particles": {

                    },
                    "sound": {

                    }
                }
            },
            "cellSheet": {
                "columnCount": 1,
                "rowCount": 1,
                "url": "https://modd.s3.amazonaws.com/asset/spriteImage/1581180072352_glock.png"
            },
            "animations": {
                "TpsmgGVfi5": {
                    "framesPerSecond": 0,
                    "loopCount": 0,
                    "frames": [
                        1
                    ],
                    "name": "default"
                }
            },
            "attributes": {

            },
            "canBeUsedBy": [
                "human"
            ],
            "effects": {
                "empty": {
                    "sound": {

                    },
                    "particles": {

                    }
                },
                "reload": {
                    "sound": {

                    },
                    "particles": {

                    }
                },
                "use": {
                    "sound": {

                    },
                    "particles": {

                    }
                }
            },
            "buffTypes": [
                "bulletForce",
                "reloadRate",
                "fireRate",
                "ammoSize",
                "ammoTotal",
                "movementSpeed",
                "maxStamina"
            ],
            "body": {
                "name": "Potato Gun",
                "fixedRotation": false,
                "z-index": {
                    "depth": 4,
                    "layer": 3
                },
                "typeWhenDrop": "dynamic",
                "friction": 0,
                "carriedBy": [
                    "human",
                    "PhuHFB46b2"
                ],
                "isFlying": false,
                "isTangible": false,
                "density": 1,
                "restitution": 1,
                "angularDamping": 1,
                "linearDamping": 1,
                "holdPosition": {
                    "x": 0,
                    "y": 40,
                    "rotation": 0
                },
                "height": 40,
                "width": 12,
                "rotationSpeed": 3,
                "jointType": "weldJoint",
                "unitAnchor": {
                    "x": 0,
                    "y": 33,
                    "rotation": 0
                },
                "itemAnchor": {
                    "x": 0,
                    "y": 0
                },
                "collidesWith": {
                    "debris": true,
                    "units": true,
                    "items": true,
                    "projectiles": true,
                    "walls": true
                },
                "type": "dynamic"
            },
            "sound": {
                "GyCivqsuR8": {
                    "name": "Reload",
                    "file": "https://modd.s3.amazonaws.com/asset/sound/1517544292301_reload.mp3"
                },
                "zjlCUPiCk0": {
                    "name": "Out of ammo",
                    "file": "https://modd.s3.amazonaws.com/asset/sound/1517544320311_fire_empty.mp3"
                },
                "empty": "fireEmpty",
                "reload": "reload",
                "fire": "fireMinigun",
                "nppwtuQaPz": {
                    "file": "https://modd.s3.amazonaws.com/asset/sound/1517544024385_fire_rifle.mp3",
                    "name": "Fire"
                }
            },
            "projectileType": "lpUqGiiq1R",
            "bulletForce": 8000,
            "distanceStart": 40,
            "bulletType": "projectile",
            "fireRate": 500,
            "recoilForce": 0,
            "reloadRate": 10,
            "ammoTotal": 10000,
            "ammo": 10000,
            "ammoSize": 10000,
            "spawnChance": 0.08,
            "type": "weapon",
            "isGun": true,
            "isPurchasable": true,
            "isStackable": false,
            "texture": "https://s3-us-west-1.amazonaws.com/modd/halloween-0.18/spritesheet/potato_gun.png",
            "handle": "potato_gun",
            "name": "Glock",
            "bulletStartPosition": {
                "x": 0,
                "y": 0
            },
            "penetration": false,
            "hits": [],
            "damage": 2,
            "canBePurchasedBy": [
                "w1NiT3YV0e"
            ],
            "particles": {
                "k4HSd1axqA": {
                    "name": "spark",
                    "color": "#ffffff",
                    "lifeBase": 50,
                    "quantityBase": 40,
                    "quantityTimespan": 70,
                    "deathOpacityBase": 0.5,
                    "mountPosition": {
                        "x": 0,
                        "y": 50
                    },
                    "velocityVector": {
                        "baseVector": {
                            "x": 0,
                            "y": 0
                        },
                        "minVector": {
                            "x": -1,
                            "y": -1
                        },
                        "maxVector": {
                            "x": 1,
                            "y": 1
                        }
                    }
                }
            },
            "lifeSpan": 60000,
            "quantity": 120,
            "maxQuantity": 1200,
            "autoUpdateQuantity": false,
            "cost": {
                "playerAttributes": {

                }
            },
            "carriedBy": [
                "human"
            ],
            "variables": {

            },
            "inventoryImage": "",
            "hideIfUnaffordable": false,
            "removeWhenEmpty": false,
            "isUsedOnPickup": false,
            "saveBandwidth": true,
            "confinedWithinMapBoundaries": true,
            "bonus": {
                "consume": {
                    "playerAttribute": {

                    },
                    "unitAttribute": {

                    }
                },
                "passive": {
                    "playerAttribute": {

                    },
                    "unitAttribute": {

                    }
                }
            }
        }
    },
    "projectileTypes": {
        "potato": {
            "effects": {
                "create": {
                    "projectileType": "",
                    "sound": {

                    },
                    "animation": ""
                },
                "destroy": {
                    "projectileType": "",
                    "sound": {

                    },
                    "animation": ""
                }
            },
            "inventoryImage": "",
            "variables": {

            },
            "attributes": {

            },
            "bodies": {
                "2Ud5pQbq7b": {
                    "spriteScale": 1,
                    "rotationSpeed": 3,
                    "z-index": {
                        "depth": 3,
                        "layer": 3
                    },
                    "name": "potato",
                    "collidesWith": {
                        "debris": true,
                        "walls": true,
                        "projectiles": false,
                        "items": true,
                        "units": true
                    },
                    "linearDamping": 1,
                    "angularDamping": 1,
                    "type": "dynamic",
                    "allowSleep": true,
                    "bullet": true,
                    "fixedRotation": false,
                    "fixtures": [
                        {
                            "friction": "0.1",
                            "isSensor": false,
                            "density": 90,
                            "restitution": 0.1,
                            "shape": {
                                "type": "rectangle"
                            }
                        }
                    ],
                    "texture": "https://s3-us-west-1.amazonaws.com/modd/halloween-0.18/spritesheet/potato.png",
                    "width": 15,
                    "height": 15
                }
            },
            "states": {
                "zTzPFYOZkc": {
                    "body": "2Ud5pQbq7b",
                    "animation": "TpsmgGVfi5",
                    "particles": {

                    },
                    "sound": {

                    },
                    "name": "default"
                }
            },
            "cellSheet": {
                "columnCount": 1,
                "rowCount": 1,
                "url": "https://modd.s3.amazonaws.com/asset/spriteImage/1558568005750_potato.png"
            },
            "animations": {
                "TpsmgGVfi5": {
                    "framesPerSecond": 0,
                    "loopCount": 0,
                    "frames": [
                        1
                    ],
                    "name": "default"
                }
            },
            "collidesWith": {
                "item": true,
                "unit": true,
                "walls": true,
                "projectiles": false,
                "items": false,
                "units": false
            },
            "isFlying": false,
            "name": "Potato",
            "width": 20,
            "height": 20,
            "body": {
                "name": "potato",
                "collidesWith": {
                    "debris": true,
                    "walls": true,
                    "projectiles": false,
                    "items": true,
                    "units": true
                },
                "linearDamping": 0.7,
                "angularDamping": 0.1,
                "type": "dynamic",
                "allowSleep": true,
                "bullet": false,
                "fixedRotation": false,
                "fixtures": [
                    {
                        "density": 3,
                        "restitution": 0.1,
                        "shape": {
                            "type": "circle"
                        }
                    }
                ],
                "texture": "https://s3-us-west-1.amazonaws.com/modd/halloween-0.18/spritesheet/potato.png"
            },
            "lifeSpan": 800,
            "confinedWithinMapBoundaries": true
        },
        "lpUqGiiq1R": {
            "effects": {
                "create": {
                    "projectileType": "",
                    "sound": {

                    },
                    "animation": ""
                },
                "destroy": {
                    "projectileType": "",
                    "sound": {

                    },
                    "animation": ""
                }
            },
            "inventoryImage": "",
            "variables": {

            },
            "attributes": {

            },
            "bodies": {
                "2Ud5pQbq7b": {
                    "spriteScale": 1,
                    "rotationSpeed": 3,
                    "z-index": {
                        "depth": 3,
                        "layer": 3
                    },
                    "name": "potato",
                    "collidesWith": {
                        "debris": true,
                        "walls": true,
                        "projectiles": false,
                        "items": true,
                        "units": true
                    },
                    "linearDamping": 1,
                    "angularDamping": 1,
                    "type": "dynamic",
                    "allowSleep": true,
                    "bullet": true,
                    "fixedRotation": true,
                    "fixtures": [
                        {
                            "friction": "0.1",
                            "isSensor": false,
                            "density": 90,
                            "restitution": 0.1,
                            "shape": {
                                "type": "rectangle"
                            }
                        }
                    ],
                    "texture": "https://s3-us-west-1.amazonaws.com/modd/halloween-0.18/spritesheet/potato.png",
                    "width": 6,
                    "height": 15
                }
            },
            "states": {
                "zTzPFYOZkc": {
                    "body": "2Ud5pQbq7b",
                    "animation": "TpsmgGVfi5",
                    "particles": {

                    },
                    "sound": {

                    },
                    "name": "default"
                }
            },
            "cellSheet": {
                "columnCount": 1,
                "rowCount": 1,
                "url": "https://modd.s3.amazonaws.com/asset/spriteImage/1581178080383_bullet.png"
            },
            "animations": {
                "TpsmgGVfi5": {
                    "framesPerSecond": 0,
                    "loopCount": 0,
                    "frames": [
                        1
                    ],
                    "name": "default"
                }
            },
            "collidesWith": {
                "item": true,
                "unit": true,
                "walls": true,
                "projectiles": false,
                "items": false,
                "units": false
            },
            "isFlying": false,
            "name": "Bullet",
            "width": 20,
            "height": 20,
            "body": {
                "name": "potato",
                "collidesWith": {
                    "debris": true,
                    "walls": true,
                    "projectiles": false,
                    "items": true,
                    "units": true
                },
                "linearDamping": 0.7,
                "angularDamping": 0.1,
                "type": "dynamic",
                "allowSleep": true,
                "bullet": false,
                "fixedRotation": false,
                "fixtures": [
                    {
                        "density": 3,
                        "restitution": 0.1,
                        "shape": {
                            "type": "circle"
                        }
                    }
                ],
                "texture": "https://s3-us-west-1.amazonaws.com/modd/halloween-0.18/spritesheet/potato.png"
            },
            "lifeSpan": 1100,
            "confinedWithinMapBoundaries": true
        }
    },
    "map": {
        "originalTileHeight": 64,
        "originalTileWidth": 64,
        "width": 35,
        "version": 1,
        "tilewidth": 64,
        "tilesets": [
            {
                "rows": 20,
                "tilewidth": 64,
                "tileheight": 64,
                "tilecount": 540,
                "spacing": 0,
                "name": "tilesheet_complete",
                "margin": 0,
                "imagewidth": 1728,
                "imageheight": 1280,
                "image": "https://modd.s3.amazonaws.com/asset/spriteImage/1581392289726_tilsheet_complete.png",
                "firstgid": 1,
                "columns": 27,
                "isMaped": true
            }
        ],
        "tileheight": 64,
        "renderorder": "right-down",
        "orientation": "orthogonal",
        "nextobjectid": 313,
        "layers": [
            {
                "y": 0,
                "x": 0,
                "width": 35,
                "visible": true,
                "type": "tilelayer",
                "opacity": 1,
                "name": "floor",
                "height": 57,
                "data": [
                    3,
                    1,
                    1,
                    3,
                    3,
                    1,
                    3,
                    3,
                    3,
                    2,
                    3,
                    2,
                    1,
                    3,
                    1,
                    2,
                    4,
                    4,
                    2,
                    1,
                    3,
                    3,
                    4,
                    3,
                    4,
                    1,
                    4,
                    4,
                    4,
                    2,
                    4,
                    3,
                    3,
                    3,
                    1,
                    2,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    17,
                    18,
                    17,
                    18,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    2,
                    4,
                    4,
                    4,
                    2,
                    2,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    17,
                    1,
                    1,
                    17,
                    18,
                    17,
                    18,
                    17,
                    18,
                    2,
                    3,
                    4,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    3,
                    4,
                    3,
                    2,
                    1,
                    2,
                    2,
                    2,
                    2,
                    1,
                    1,
                    1,
                    2,
                    1,
                    2,
                    2,
                    18,
                    17,
                    17,
                    17,
                    18,
                    17,
                    18,
                    17,
                    18,
                    17,
                    4,
                    3,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    3,
                    1,
                    1,
                    1,
                    2,
                    2,
                    1,
                    1,
                    1,
                    2,
                    1,
                    1,
                    0,
                    0,
                    0,
                    0,
                    4,
                    17,
                    5,
                    6,
                    5,
                    18,
                    1,
                    4,
                    17,
                    18,
                    17,
                    17,
                    17,
                    2,
                    1,
                    1,
                    1,
                    1,
                    1,
                    2,
                    2,
                    1,
                    1,
                    3,
                    93,
                    93,
                    93,
                    93,
                    93,
                    93,
                    93,
                    93,
                    93,
                    93,
                    93,
                    93,
                    93,
                    1,
                    17,
                    17,
                    18,
                    6,
                    17,
                    17,
                    18,
                    17,
                    17,
                    7,
                    7,
                    7,
                    7,
                    7,
                    7,
                    7,
                    7,
                    2,
                    4,
                    1,
                    3,
                    93,
                    56,
                    93,
                    56,
                    93,
                    56,
                    93,
                    93,
                    93,
                    93,
                    93,
                    93,
                    93,
                    1,
                    17,
                    17,
                    6,
                    17,
                    17,
                    17,
                    5,
                    17,
                    18,
                    7,
                    7,
                    7,
                    7,
                    7,
                    7,
                    7,
                    7,
                    2,
                    1,
                    2,
                    1,
                    93,
                    93,
                    93,
                    93,
                    93,
                    93,
                    93,
                    93,
                    93,
                    93,
                    93,
                    93,
                    93,
                    1,
                    17,
                    5,
                    5,
                    5,
                    17,
                    5,
                    5,
                    18,
                    17,
                    7,
                    7,
                    7,
                    7,
                    7,
                    7,
                    7,
                    7,
                    2,
                    1,
                    4,
                    3,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    93,
                    169,
                    178,
                    178,
                    93,
                    93,
                    1,
                    17,
                    18,
                    17,
                    5,
                    17,
                    5,
                    17,
                    18,
                    7,
                    7,
                    7,
                    7,
                    7,
                    7,
                    7,
                    7,
                    7,
                    2,
                    3,
                    1,
                    1,
                    4,
                    1,
                    2,
                    1,
                    1,
                    1,
                    1,
                    178,
                    178,
                    178,
                    178,
                    178,
                    1,
                    1,
                    5,
                    18,
                    17,
                    17,
                    18,
                    6,
                    5,
                    18,
                    7,
                    7,
                    7,
                    8,
                    8,
                    8,
                    7,
                    7,
                    7,
                    2,
                    4,
                    2,
                    4,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    178,
                    178,
                    178,
                    178,
                    178,
                    17,
                    18,
                    17,
                    18,
                    17,
                    17,
                    18,
                    17,
                    18,
                    17,
                    8,
                    7,
                    7,
                    7,
                    8,
                    8,
                    8,
                    8,
                    7,
                    6,
                    3,
                    2,
                    1,
                    3,
                    1,
                    1,
                    1,
                    1,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    1,
                    17,
                    18,
                    17,
                    18,
                    17,
                    17,
                    18,
                    17,
                    18,
                    1,
                    8,
                    7,
                    7,
                    7,
                    7,
                    8,
                    8,
                    7,
                    7,
                    6,
                    1,
                    1,
                    2,
                    3,
                    1,
                    1,
                    1,
                    1,
                    96,
                    96,
                    96,
                    96,
                    96,
                    1,
                    1,
                    1,
                    18,
                    0,
                    96,
                    340,
                    313,
                    96,
                    17,
                    1,
                    1,
                    96,
                    7,
                    7,
                    7,
                    7,
                    8,
                    8,
                    8,
                    8,
                    6,
                    3,
                    3,
                    2,
                    1,
                    1,
                    1,
                    1,
                    1,
                    13,
                    13,
                    13,
                    13,
                    96,
                    96,
                    96,
                    120,
                    120,
                    96,
                    96,
                    96,
                    96,
                    96,
                    1,
                    1,
                    1,
                    8,
                    7,
                    7,
                    7,
                    8,
                    7,
                    7,
                    8,
                    8,
                    6,
                    1,
                    3,
                    3,
                    1,
                    1,
                    1,
                    1,
                    340,
                    13,
                    13,
                    13,
                    13,
                    96,
                    96,
                    96,
                    96,
                    96,
                    96,
                    96,
                    96,
                    96,
                    96,
                    96,
                    96,
                    1,
                    7,
                    7,
                    8,
                    7,
                    8,
                    8,
                    8,
                    7,
                    7,
                    6,
                    4,
                    3,
                    2,
                    3,
                    1,
                    1,
                    1,
                    340,
                    13,
                    13,
                    13,
                    13,
                    96,
                    96,
                    96,
                    96,
                    96,
                    96,
                    96,
                    96,
                    96,
                    96,
                    96,
                    96,
                    96,
                    8,
                    8,
                    7,
                    7,
                    8,
                    8,
                    7,
                    7,
                    8,
                    6,
                    4,
                    1,
                    4,
                    4,
                    1,
                    1,
                    1,
                    1,
                    13,
                    13,
                    13,
                    13,
                    377,
                    96,
                    96,
                    96,
                    96,
                    96,
                    96,
                    96,
                    96,
                    96,
                    96,
                    96,
                    96,
                    8,
                    8,
                    7,
                    7,
                    7,
                    8,
                    7,
                    7,
                    8,
                    356,
                    4,
                    4,
                    2,
                    1,
                    1,
                    1,
                    1,
                    1,
                    13,
                    13,
                    13,
                    13,
                    96,
                    96,
                    96,
                    96,
                    96,
                    96,
                    96,
                    96,
                    96,
                    96,
                    96,
                    96,
                    96,
                    8,
                    8,
                    7,
                    7,
                    8,
                    7,
                    8,
                    7,
                    2,
                    4,
                    3,
                    4,
                    4,
                    2,
                    1,
                    1,
                    1,
                    1,
                    96,
                    96,
                    96,
                    96,
                    96,
                    96,
                    96,
                    96,
                    96,
                    96,
                    96,
                    96,
                    96,
                    373,
                    374,
                    375,
                    96,
                    8,
                    8,
                    8,
                    370,
                    371,
                    372,
                    7,
                    1,
                    1,
                    1,
                    2,
                    1,
                    3,
                    4,
                    1,
                    1,
                    1,
                    11,
                    11,
                    11,
                    11,
                    96,
                    96,
                    96,
                    96,
                    96,
                    96,
                    96,
                    96,
                    96,
                    96,
                    427,
                    428,
                    429,
                    96,
                    8,
                    8,
                    8,
                    397,
                    398,
                    399,
                    7,
                    1,
                    1,
                    1,
                    1,
                    3,
                    1,
                    1,
                    1,
                    1,
                    1,
                    11,
                    11,
                    11,
                    11,
                    96,
                    96,
                    96,
                    96,
                    96,
                    96,
                    96,
                    96,
                    96,
                    96,
                    96,
                    96,
                    96,
                    96,
                    7,
                    7,
                    8,
                    424,
                    425,
                    426,
                    7,
                    2,
                    2,
                    2,
                    1,
                    1,
                    3,
                    3,
                    1,
                    1,
                    1,
                    11,
                    11,
                    11,
                    11,
                    96,
                    96,
                    346,
                    348,
                    96,
                    96,
                    96,
                    96,
                    96,
                    96,
                    96,
                    96,
                    96,
                    96,
                    7,
                    7,
                    7,
                    8,
                    7,
                    8,
                    8,
                    8,
                    4,
                    2,
                    2,
                    3,
                    2,
                    4,
                    1,
                    1,
                    1,
                    11,
                    11,
                    11,
                    11,
                    96,
                    96,
                    96,
                    96,
                    96,
                    96,
                    96,
                    96,
                    96,
                    96,
                    96,
                    96,
                    96,
                    96,
                    5,
                    6,
                    5,
                    0,
                    7,
                    7,
                    8,
                    0,
                    4,
                    3,
                    1,
                    4,
                    4,
                    1,
                    1,
                    1,
                    1,
                    11,
                    11,
                    11,
                    11,
                    1,
                    1,
                    5,
                    6,
                    4,
                    1,
                    1,
                    377,
                    377,
                    377,
                    377,
                    377,
                    377,
                    1,
                    4,
                    2,
                    4,
                    7,
                    8,
                    7,
                    8,
                    4,
                    2,
                    3,
                    1,
                    4,
                    3,
                    4,
                    1,
                    1,
                    1,
                    11,
                    11,
                    11,
                    11,
                    1,
                    1,
                    5,
                    6,
                    2,
                    1,
                    1,
                    377,
                    377,
                    377,
                    377,
                    377,
                    377,
                    1,
                    3,
                    4,
                    4,
                    7,
                    1,
                    2,
                    1,
                    2,
                    1,
                    3,
                    4,
                    3,
                    3,
                    3,
                    1,
                    1,
                    1,
                    11,
                    11,
                    11,
                    11,
                    4,
                    2,
                    5,
                    6,
                    1,
                    1,
                    1,
                    377,
                    377,
                    377,
                    377,
                    377,
                    377,
                    1,
                    3,
                    2,
                    4,
                    1,
                    1,
                    2,
                    3,
                    4,
                    4,
                    2,
                    3,
                    2,
                    3,
                    2,
                    1,
                    1,
                    1,
                    11,
                    11,
                    11,
                    11,
                    4,
                    2,
                    6,
                    6,
                    3,
                    2,
                    1,
                    377,
                    377,
                    377,
                    377,
                    377,
                    377,
                    1,
                    1,
                    1,
                    2,
                    1,
                    1,
                    1,
                    2,
                    3,
                    4,
                    1,
                    4,
                    4,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    93,
                    93,
                    4,
                    3,
                    4,
                    6,
                    6,
                    5,
                    1,
                    1,
                    1,
                    1,
                    340,
                    340,
                    340,
                    1,
                    1,
                    4,
                    2,
                    3,
                    1,
                    4,
                    1,
                    2,
                    3,
                    4,
                    1,
                    3,
                    3,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    2,
                    3,
                    1,
                    2,
                    5,
                    6,
                    3,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    2,
                    4,
                    1,
                    2,
                    3,
                    4,
                    2,
                    1,
                    1,
                    1,
                    273,
                    273,
                    273,
                    273,
                    273,
                    273,
                    273,
                    273,
                    273,
                    273,
                    273,
                    273,
                    273,
                    273,
                    273,
                    273,
                    273,
                    273,
                    273,
                    273,
                    273,
                    273,
                    273,
                    273,
                    273,
                    273,
                    273,
                    273,
                    273,
                    273,
                    273,
                    273,
                    273,
                    273,
                    273,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    57,
                    57,
                    57,
                    57,
                    57,
                    57,
                    57,
                    57,
                    57,
                    57,
                    57,
                    57,
                    57,
                    57,
                    57,
                    57,
                    57,
                    57,
                    57,
                    57,
                    57,
                    57,
                    57,
                    57,
                    57,
                    57,
                    57,
                    57,
                    57,
                    57,
                    57,
                    57,
                    57,
                    57,
                    57,
                    30,
                    30,
                    30,
                    30,
                    30,
                    30,
                    30,
                    30,
                    30,
                    30,
                    30,
                    30,
                    30,
                    30,
                    30,
                    30,
                    30,
                    30,
                    30,
                    30,
                    30,
                    30,
                    30,
                    30,
                    30,
                    30,
                    30,
                    30,
                    30,
                    30,
                    30,
                    30,
                    30,
                    30,
                    30,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    86,
                    273,
                    273,
                    273,
                    273,
                    273,
                    273,
                    273,
                    273,
                    273,
                    273,
                    273,
                    273,
                    273,
                    273,
                    273,
                    273,
                    273,
                    273,
                    273,
                    273,
                    273,
                    273,
                    273,
                    273,
                    273,
                    273,
                    273,
                    273,
                    273,
                    273,
                    273,
                    273,
                    273,
                    273,
                    273,
                    1,
                    3,
                    2,
                    329,
                    330,
                    3,
                    1,
                    1,
                    3,
                    3,
                    2,
                    3,
                    3,
                    329,
                    330,
                    1,
                    2,
                    2,
                    2,
                    3,
                    2,
                    3,
                    1,
                    2,
                    2,
                    2,
                    1,
                    1,
                    2,
                    2,
                    4,
                    3,
                    4,
                    1,
                    3,
                    4,
                    1,
                    2,
                    329,
                    330,
                    4,
                    2,
                    4,
                    3,
                    3,
                    3,
                    4,
                    3,
                    329,
                    330,
                    2,
                    2,
                    1,
                    3,
                    2,
                    4,
                    3,
                    3,
                    2,
                    3,
                    2,
                    3,
                    1,
                    1,
                    2,
                    2,
                    1,
                    4,
                    2,
                    2,
                    4,
                    3,
                    2,
                    329,
                    330,
                    2,
                    4,
                    3,
                    4,
                    2,
                    2,
                    6,
                    47,
                    305,
                    306,
                    6,
                    5,
                    6,
                    5,
                    6,
                    5,
                    6,
                    3,
                    2,
                    3,
                    4,
                    3,
                    101,
                    101,
                    101,
                    101,
                    1,
                    1,
                    3,
                    1,
                    2,
                    3,
                    2,
                    329,
                    330,
                    1,
                    2,
                    4,
                    1,
                    1,
                    1,
                    6,
                    343,
                    344,
                    344,
                    345,
                    5,
                    101,
                    101,
                    101,
                    101,
                    16,
                    5,
                    6,
                    1,
                    1,
                    1,
                    101,
                    101,
                    101,
                    101,
                    3,
                    2,
                    3,
                    3,
                    2,
                    4,
                    1,
                    329,
                    330,
                    6,
                    5,
                    4,
                    1,
                    1,
                    5,
                    6,
                    101,
                    101,
                    101,
                    101,
                    5,
                    101,
                    97,
                    97,
                    101,
                    101,
                    101,
                    6,
                    2,
                    1,
                    4,
                    1,
                    101,
                    101,
                    101,
                    4,
                    2,
                    1,
                    2,
                    3,
                    1,
                    1,
                    329,
                    330,
                    6,
                    101,
                    101,
                    101,
                    101,
                    101,
                    101,
                    101,
                    101,
                    101,
                    101,
                    16,
                    101,
                    101,
                    101,
                    101,
                    101,
                    101,
                    16,
                    3,
                    3,
                    4,
                    1,
                    4,
                    1,
                    1,
                    1,
                    3,
                    1,
                    2,
                    4,
                    4,
                    4,
                    329,
                    330,
                    6,
                    101,
                    373,
                    374,
                    375,
                    101,
                    101,
                    101,
                    101,
                    101,
                    101,
                    16,
                    101,
                    101,
                    101,
                    101,
                    101,
                    101,
                    6,
                    1,
                    1,
                    2,
                    2,
                    2,
                    4,
                    2,
                    2,
                    4,
                    2,
                    2,
                    3,
                    4,
                    1,
                    329,
                    330,
                    6,
                    101,
                    400,
                    401,
                    402,
                    101,
                    47,
                    101,
                    101,
                    101,
                    101,
                    5,
                    6,
                    5,
                    6,
                    101,
                    101,
                    5,
                    6,
                    5,
                    6,
                    5,
                    2,
                    4,
                    3,
                    1,
                    4,
                    3,
                    2,
                    2,
                    1,
                    2,
                    1,
                    329,
                    330,
                    6,
                    101,
                    427,
                    428,
                    429,
                    101,
                    47,
                    101,
                    101,
                    101,
                    101,
                    101,
                    101,
                    101,
                    101,
                    101,
                    101,
                    101,
                    101,
                    101,
                    101,
                    5,
                    4,
                    3,
                    2,
                    2,
                    2,
                    1,
                    2,
                    1,
                    1,
                    2,
                    4,
                    329,
                    330,
                    6,
                    5,
                    6,
                    5,
                    6,
                    5,
                    6,
                    101,
                    6,
                    5,
                    6,
                    5,
                    6,
                    101,
                    101,
                    47,
                    6,
                    5,
                    47,
                    101,
                    101,
                    5,
                    1,
                    1,
                    2,
                    1,
                    4,
                    2,
                    1,
                    4,
                    1,
                    4,
                    2,
                    329,
                    330,
                    3,
                    2,
                    1,
                    5,
                    101,
                    101,
                    101,
                    101,
                    101,
                    101,
                    101,
                    5,
                    101,
                    101,
                    101,
                    101,
                    16,
                    101,
                    101,
                    101,
                    101,
                    1,
                    3,
                    3,
                    1,
                    3,
                    3,
                    1,
                    2,
                    4,
                    2,
                    4,
                    4,
                    329,
                    352,
                    356,
                    356,
                    356,
                    279,
                    101,
                    6,
                    101,
                    101,
                    101,
                    101,
                    101,
                    6,
                    101,
                    101,
                    101,
                    101,
                    5,
                    101,
                    101,
                    101,
                    101,
                    2,
                    1,
                    3,
                    4,
                    3,
                    3,
                    1,
                    3,
                    1,
                    3,
                    3,
                    4,
                    305,
                    357,
                    357,
                    357,
                    357,
                    306,
                    101,
                    47,
                    101,
                    101,
                    101,
                    101,
                    101,
                    6,
                    101,
                    101,
                    101,
                    101,
                    5,
                    101,
                    101,
                    101,
                    101,
                    6,
                    3,
                    3,
                    1,
                    2,
                    2,
                    2,
                    3,
                    1,
                    1,
                    3,
                    4,
                    1,
                    4,
                    2,
                    2,
                    2,
                    47,
                    101,
                    47,
                    101,
                    101,
                    97,
                    97,
                    97,
                    6,
                    97,
                    101,
                    101,
                    101,
                    5,
                    97,
                    97,
                    97,
                    97,
                    6,
                    1,
                    4,
                    4,
                    2,
                    4,
                    2,
                    3,
                    1,
                    1,
                    4,
                    3,
                    3,
                    1,
                    1,
                    4,
                    1,
                    1,
                    1,
                    47,
                    47,
                    4,
                    1,
                    2,
                    3,
                    6,
                    16,
                    15,
                    16,
                    16,
                    5,
                    15,
                    15,
                    15,
                    15,
                    6,
                    1,
                    2,
                    1,
                    4,
                    3,
                    4,
                    4,
                    2,
                    1,
                    2,
                    3,
                    1,
                    1,
                    2,
                    1,
                    4,
                    1,
                    2,
                    1,
                    2,
                    3,
                    4,
                    4,
                    2,
                    1,
                    1,
                    4,
                    4,
                    4,
                    4,
                    3,
                    2,
                    2,
                    1,
                    1,
                    2,
                    1,
                    2,
                    3,
                    2,
                    3,
                    1,
                    4,
                    2,
                    4,
                    1,
                    4,
                    1,
                    4,
                    3,
                    3,
                    3,
                    3,
                    2,
                    4,
                    1,
                    4,
                    1,
                    1,
                    4,
                    1,
                    3,
                    4,
                    2,
                    2,
                    2,
                    1,
                    1,
                    4,
                    1,
                    2,
                    1,
                    3,
                    3,
                    4,
                    3,
                    4,
                    2,
                    2,
                    3,
                    3,
                    2,
                    1,
                    2,
                    2,
                    3,
                    3,
                    2,
                    2,
                    3,
                    2,
                    3,
                    1,
                    2,
                    3,
                    3,
                    3,
                    2,
                    1,
                    2,
                    3,
                    3,
                    1,
                    4,
                    1,
                    2,
                    4,
                    3,
                    1,
                    4,
                    2,
                    4,
                    1,
                    2,
                    2,
                    3,
                    4,
                    2,
                    3,
                    3,
                    1,
                    1,
                    3,
                    4,
                    2,
                    4,
                    4,
                    1,
                    4,
                    2,
                    4,
                    4,
                    1,
                    1,
                    3,
                    2,
                    1,
                    3,
                    3,
                    2,
                    1,
                    1,
                    3,
                    1,
                    1,
                    4,
                    2,
                    3,
                    3,
                    1,
                    1,
                    4,
                    1,
                    1,
                    3,
                    1,
                    3,
                    3,
                    2,
                    4,
                    1,
                    1,
                    4,
                    2,
                    2,
                    1,
                    3,
                    4,
                    1,
                    4,
                    2,
                    3,
                    4,
                    4,
                    4,
                    2,
                    4,
                    2,
                    3,
                    4,
                    4,
                    1,
                    2
                ]
            },
            {
                "y": 0,
                "x": 0,
                "width": 35,
                "visible": true,
                "type": "tilelayer",
                "opacity": 1,
                "name": "floor2",
                "height": 57,
                "data": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            {
                "y": 0,
                "x": 0,
                "width": 35,
                "visible": true,
                "type": "objectgroup",
                "opacity": 1,
                "objects": [
                    {
                        "igeId": "10135740",
                        "restitution": "0",
                        "friction": "0",
                        "density": 1,
                        "gid": 129,
                        "name": "0",
                        "id": 2,
                        "type": "dynamic",
                        "visible": 1,
                        "rotation": "0",
                        "width": 62,
                        "height": 62,
                        "y": 1056.24242424242,
                        "x": 1324.12121212121
                    },
                    {
                        "igeId": "292c2d3c",
                        "restitution": "0",
                        "friction": "0",
                        "density": 1,
                        "gid": 129,
                        "name": "0",
                        "id": 3,
                        "type": "dynamic",
                        "visible": 1,
                        "rotation": "0",
                        "width": 56,
                        "height": 56,
                        "y": 928.30303030303,
                        "x": 1019.09090909091
                    },
                    {
                        "igeId": "3abdb1fb",
                        "restitution": "0",
                        "friction": "0",
                        "density": 0.5,
                        "gid": 129,
                        "name": "0",
                        "id": 5,
                        "type": "dynamic",
                        "visible": 1,
                        "rotation": "0",
                        "width": 56,
                        "height": 56,
                        "y": 423.212121212121,
                        "x": 899.818181818182
                    },
                    {
                        "igeId": "2306d28b",
                        "restitution": "0",
                        "friction": "0",
                        "density": 1,
                        "gid": 129,
                        "name": "0",
                        "id": 6,
                        "type": "dynamic",
                        "visible": 1,
                        "rotation": "0",
                        "width": 62,
                        "height": 62,
                        "y": 622.30303030303,
                        "x": 537.878787878787
                    },
                    {
                        "igeId": "2fb7802c",
                        "restitution": "0",
                        "friction": "0",
                        "density": 1,
                        "gid": 129,
                        "name": "0",
                        "id": 7,
                        "type": "dynamic",
                        "visible": 1,
                        "rotation": "0",
                        "width": 60,
                        "height": 60,
                        "y": 446.606060606061,
                        "x": 251.454545454545
                    },
                    {
                        "igeId": "2c3d3602",
                        "restitution": "0",
                        "friction": "0",
                        "density": 1,
                        "gid": 296,
                        "name": "0",
                        "id": 15,
                        "type": "dynamic",
                        "visible": 1,
                        "rotation": -268.588008391829,
                        "width": 60,
                        "height": 60,
                        "y": 1472.97876735482,
                        "x": 364.131575054424
                    },
                    {
                        "igeId": "36c712a8",
                        "restitution": "0",
                        "friction": "0",
                        "density": 1,
                        "gid": 323,
                        "name": "0",
                        "id": 17,
                        "type": "dynamic",
                        "visible": 1,
                        "rotation": -270.726010380653,
                        "width": 56,
                        "height": 56,
                        "y": 1545.68076605513,
                        "x": 353.960735468403
                    },
                    {
                        "igeId": "3054ac4e",
                        "x": 1062.12121212121,
                        "y": 696.727272727273,
                        "height": 56,
                        "width": 56,
                        "rotation": "0",
                        "visible": 1,
                        "type": "dynamic",
                        "id": 28,
                        "name": "0",
                        "gid": 186,
                        "density": 1,
                        "friction": "0",
                        "restitution": "0"
                    },
                    {
                        "igeId": "22c34bfa",
                        "x": 1217.9393939394,
                        "y": 719.515151515152,
                        "height": 56,
                        "width": 56,
                        "rotation": "0",
                        "visible": 1,
                        "type": "dynamic",
                        "id": 30,
                        "name": "0",
                        "gid": 183,
                        "density": 1,
                        "friction": "0",
                        "restitution": "0"
                    },
                    {
                        "igeId": "1f0ea948",
                        "restitution": "0",
                        "friction": "0",
                        "density": 1,
                        "gid": 129,
                        "name": "0",
                        "id": 34,
                        "type": "dynamic",
                        "visible": 1,
                        "rotation": "0",
                        "width": 58,
                        "height": 58,
                        "y": 1201.21212121212,
                        "x": 1952.78787878788
                    },
                    {
                        "igeId": "3b8e8e47",
                        "x": 1679.21212121212,
                        "y": 1714.84848484848,
                        "height": 60,
                        "width": 60,
                        "rotation": "0",
                        "visible": 1,
                        "type": "dynamic",
                        "id": 37,
                        "name": "0",
                        "gid": 129,
                        "density": 1,
                        "friction": "0",
                        "restitution": "0"
                    },
                    {
                        "igeId": "2712d038",
                        "restitution": "0",
                        "friction": "0",
                        "density": 0.5,
                        "gid": 129,
                        "name": "0",
                        "id": 45,
                        "type": "dynamic",
                        "visible": 1,
                        "rotation": "0",
                        "width": 62,
                        "height": 62,
                        "y": 260.727272727272,
                        "x": 1245.45454545454
                    },
                    {
                        "igeId": "3770ec40",
                        "restitution": "0",
                        "friction": "0",
                        "density": 0.3,
                        "gid": 549,
                        "name": "0",
                        "id": 82,
                        "type": "dynamic",
                        "visible": 1,
                        "rotation": "0",
                        "width": 176,
                        "height": 60,
                        "y": 1321.33333333333,
                        "x": 1162.66666666667
                    },
                    {
                        "igeId": "23e7e131",
                        "x": 799,
                        "y": 1082,
                        "height": 62,
                        "width": 135,
                        "rotation": "0",
                        "visible": 1,
                        "type": "dynamic",
                        "id": 87,
                        "name": "0",
                        "gid": 541,
                        "density": 0.5,
                        "friction": "0",
                        "restitution": "0"
                    },
                    {
                        "x": 1283.98145866953,
                        "y": 1614.58818758672,
                        "height": 54,
                        "width": 124,
                        "rotation": 254.413733231029,
                        "visible": 1,
                        "type": "dynamic",
                        "id": 88,
                        "name": "0",
                        "gid": 543,
                        "density": 0.4,
                        "friction": "0",
                        "restitution": "0",
                        "igeId": "2698a556"
                    },
                    {
                        "x": 463.196587368886,
                        "y": 868.686841752725,
                        "height": 56,
                        "width": 124,
                        "rotation": 185.551921538159,
                        "visible": 1,
                        "type": "dynamic",
                        "id": 89,
                        "name": "0",
                        "gid": 542,
                        "density": 0.4,
                        "friction": "0",
                        "restitution": "0",
                        "igeId": "325e5cb5"
                    },
                    {
                        "igeId": "24307c88",
                        "restitution": "0",
                        "friction": "0",
                        "density": 0.5,
                        "gid": 129,
                        "name": "0",
                        "id": 92,
                        "type": "dynamic",
                        "visible": 1,
                        "rotation": "0",
                        "width": 88,
                        "height": 88,
                        "y": 2605,
                        "x": 1905
                    },
                    {
                        "igeId": "180e4825",
                        "restitution": "0",
                        "friction": "0",
                        "density": 1,
                        "gid": 450,
                        "name": "0",
                        "id": 96,
                        "type": "dynamic",
                        "visible": 1,
                        "rotation": 270,
                        "width": 54,
                        "height": 56,
                        "y": 2868,
                        "x": 984
                    },
                    {
                        "igeId": "124bc3c7",
                        "restitution": "0",
                        "friction": "0",
                        "density": 1,
                        "gid": 538,
                        "name": "0",
                        "id": 100,
                        "type": "dynamic",
                        "visible": 1,
                        "rotation": "0",
                        "width": 56,
                        "height": 56,
                        "y": 2778,
                        "x": 912
                    },
                    {
                        "igeId": "34255d74",
                        "restitution": "0",
                        "friction": "0",
                        "density": 0.4,
                        "gid": 545,
                        "name": "0",
                        "id": 103,
                        "type": "dynamic",
                        "visible": 1,
                        "rotation": "0",
                        "width": 70,
                        "height": 165,
                        "y": 3196.33333333333,
                        "x": 1162
                    },
                    {
                        "igeId": "21d823a6",
                        "x": 1460,
                        "y": 3226,
                        "height": 58,
                        "width": 124,
                        "rotation": "0",
                        "visible": 1,
                        "type": "dynamic",
                        "id": 104,
                        "name": "0",
                        "gid": 541,
                        "density": 0.5,
                        "friction": "0",
                        "restitution": "0"
                    },
                    {
                        "igeId": "32de31bc",
                        "restitution": "0",
                        "friction": "0",
                        "density": 0.5,
                        "gid": 542,
                        "name": "0",
                        "id": 105,
                        "type": "dynamic",
                        "visible": 1,
                        "rotation": 97.1168244500252,
                        "width": 128,
                        "height": 56,
                        "y": 2707.67593451232,
                        "x": 437.365755820241
                    },
                    {
                        "igeId": "33bd65d0",
                        "restitution": "0",
                        "friction": "0",
                        "density": 0.5,
                        "gid": 543,
                        "name": "0",
                        "id": 106,
                        "type": "dynamic",
                        "visible": 1,
                        "rotation": -85.3549096688776,
                        "width": 128,
                        "height": 54,
                        "y": 2912.3812559919,
                        "x": 666.711960859092
                    },
                    {
                        "igeId": "1a6d6292",
                        "restitution": "0",
                        "friction": "0",
                        "density": 1,
                        "gid": 296,
                        "name": "0",
                        "id": 109,
                        "type": "dynamic",
                        "visible": 1,
                        "rotation": "0",
                        "width": 60,
                        "height": 60,
                        "y": 3230,
                        "x": 944
                    },
                    {
                        "igeId": "2eaf7bd2",
                        "restitution": "0",
                        "friction": "0",
                        "density": 1,
                        "gid": 323,
                        "name": "0",
                        "id": 110,
                        "type": "dynamic",
                        "visible": 1,
                        "rotation": "0",
                        "width": 60,
                        "height": 60,
                        "y": 3234,
                        "x": 870
                    },
                    {
                        "igeId": "3bd96b0f",
                        "restitution": "0",
                        "friction": "0",
                        "density": 0.5,
                        "gid": 321,
                        "name": "0",
                        "id": 111,
                        "type": "dynamic",
                        "visible": 1,
                        "rotation": "0",
                        "width": 136,
                        "height": 60,
                        "y": 3208,
                        "x": 733.333333333333
                    },
                    {
                        "igeId": "2f37917d",
                        "x": 1550.48556200932,
                        "y": 2958.637757437,
                        "height": 58.029810455796,
                        "width": 186.089431367388,
                        "rotation": 96.9994196294346,
                        "visible": 1,
                        "type": "dynamic",
                        "id": 112,
                        "name": "0",
                        "gid": 547,
                        "density": 0.3,
                        "friction": "0",
                        "restitution": "0"
                    },
                    {
                        "igeId": "368e2845",
                        "restitution": "0",
                        "friction": "0",
                        "density": 1,
                        "gid": 129,
                        "name": "0",
                        "id": 113,
                        "type": "dynamic",
                        "visible": 1,
                        "rotation": "0",
                        "width": 58,
                        "height": 58,
                        "y": 2680,
                        "x": 1364
                    },
                    {
                        "igeId": "2c99cfd4",
                        "x": 1356.66666666667,
                        "y": 2809.33333333333,
                        "height": 80.3333333333335,
                        "width": 80.3333333333335,
                        "rotation": "0",
                        "visible": 1,
                        "type": "dynamic",
                        "id": 114,
                        "name": "0",
                        "gid": 129,
                        "density": 0.7,
                        "friction": "0",
                        "restitution": "0"
                    },
                    {
                        "igeId": "2d613143",
                        "restitution": "0",
                        "friction": "0",
                        "density": 1,
                        "gid": 129,
                        "name": "0",
                        "id": 115,
                        "type": "dynamic",
                        "visible": 1,
                        "rotation": "0",
                        "width": 60,
                        "height": 60,
                        "y": 2844,
                        "x": 822
                    },
                    {
                        "igeId": "4406aee7",
                        "restitution": "0",
                        "friction": "0",
                        "density": 1,
                        "gid": 129,
                        "name": "0",
                        "id": 117,
                        "type": "dynamic",
                        "visible": 1,
                        "rotation": "0",
                        "width": 60,
                        "height": 60,
                        "y": 2450,
                        "x": 966
                    },
                    {
                        "igeId": "3aefc0fe",
                        "restitution": "0",
                        "friction": "0",
                        "density": 1,
                        "gid": 129,
                        "name": "0",
                        "id": 118,
                        "type": "dynamic",
                        "visible": 1,
                        "rotation": "0",
                        "width": 60,
                        "height": 60,
                        "y": 2528,
                        "x": 558
                    },
                    {
                        "igeId": "22338c3d",
                        "x": 1426,
                        "y": 1732.66666666667,
                        "height": 58,
                        "width": 58,
                        "rotation": "0",
                        "visible": 1,
                        "type": "dynamic",
                        "id": 121,
                        "name": "0",
                        "gid": 129,
                        "density": 1,
                        "friction": "0",
                        "restitution": "0"
                    },
                    {
                        "igeId": "30491133",
                        "restitution": "0",
                        "friction": "0",
                        "density": 1,
                        "gid": 129,
                        "name": "0",
                        "id": 122,
                        "type": "dynamic",
                        "visible": 1,
                        "rotation": "0",
                        "width": 62,
                        "height": 62,
                        "y": 2561,
                        "x": 1777
                    },
                    {
                        "igeId": "479529c3",
                        "restitution": "0",
                        "friction": "0",
                        "density": 1,
                        "gid": 529,
                        "name": "0",
                        "id": 129,
                        "type": "dynamic",
                        "visible": 1,
                        "rotation": 90,
                        "width": 56,
                        "height": 56,
                        "y": 380.015275697568,
                        "x": 1506.87207353863
                    },
                    {
                        "igeId": "31ce0567",
                        "restitution": "0",
                        "friction": "0",
                        "density": 1,
                        "gid": 529,
                        "name": "0",
                        "id": 131,
                        "type": "dynamic",
                        "visible": 1,
                        "rotation": 66.5611312248377,
                        "width": 56,
                        "height": 56,
                        "y": 680.03579943147,
                        "x": 1898.91182761149
                    },
                    {
                        "igeId": "371e74dc",
                        "restitution": "0",
                        "friction": "0",
                        "density": 1,
                        "gid": 529,
                        "name": "0",
                        "id": 135,
                        "type": "dynamic",
                        "visible": 1,
                        "rotation": 95,
                        "width": 56,
                        "height": 56,
                        "y": 500.392003624896,
                        "x": 1506.27232552648
                    },
                    {
                        "igeId": "380d193e",
                        "restitution": "0",
                        "friction": "0",
                        "density": 0.5,
                        "gid": 321,
                        "name": "0",
                        "id": 149,
                        "type": "dynamic",
                        "visible": 1,
                        "rotation": "0",
                        "width": 128,
                        "height": 60,
                        "y": 1690.60606060606,
                        "x": 410.36346969697
                    },
                    {
                        "x": 562,
                        "y": 397,
                        "height": 236,
                        "width": 184,
                        "rotation": -270,
                        "visible": 1,
                        "type": "dynamic",
                        "id": 150,
                        "name": "0",
                        "gid": 550,
                        "density": 0.4,
                        "friction": "0",
                        "restitution": "0",
                        "igeId": "1a53a4ee"
                    },
                    {
                        "x": 1418.95138705657,
                        "y": 2017.17227891361,
                        "height": 304.013310481247,
                        "width": 173.81856723453,
                        "rotation": -446.051236638096,
                        "visible": 1,
                        "type": "dynamic",
                        "id": 151,
                        "name": "0",
                        "gid": 551,
                        "density": 0.7,
                        "friction": "0",
                        "restitution": "0",
                        "igeId": "355a19ff"
                    },
                    {
                        "igeId": "2b16e6c6",
                        "restitution": "0",
                        "friction": "0",
                        "density": 1,
                        "gid": 538,
                        "name": "0",
                        "id": 153,
                        "type": "dynamic",
                        "visible": 1,
                        "rotation": "0",
                        "width": 58,
                        "height": 58,
                        "y": 1305.33333333333,
                        "x": 403.333333333333
                    },
                    {
                        "igeId": "2eba8f78",
                        "restitution": "0",
                        "friction": "0",
                        "density": 1,
                        "gid": 530,
                        "name": "0",
                        "id": 154,
                        "type": "dynamic",
                        "visible": 1,
                        "rotation": 94.2678933002908,
                        "width": 56,
                        "height": 56,
                        "y": 1229.04063197553,
                        "x": 270.470173830779
                    },
                    {
                        "igeId": "33fb4b6e",
                        "restitution": "0",
                        "friction": "0",
                        "density": 0.7,
                        "gid": 129,
                        "name": "0",
                        "id": 180,
                        "type": "dynamic",
                        "visible": 1,
                        "rotation": "0",
                        "width": 94,
                        "height": 94,
                        "y": 1368.18181818182,
                        "x": 1964.48484848485
                    },
                    {
                        "igeId": "2a81cdd5",
                        "restitution": "0",
                        "friction": "0",
                        "density": 1,
                        "gid": 129,
                        "name": "0",
                        "id": 182,
                        "type": "dynamic",
                        "visible": 1,
                        "rotation": "0",
                        "width": 58,
                        "height": 58,
                        "y": 1691.21212121212,
                        "x": 1257.45454545455
                    },
                    {
                        "igeId": "213b6e71",
                        "restitution": "0",
                        "friction": "0",
                        "density": 0.5,
                        "gid": 544,
                        "name": "0",
                        "id": 184,
                        "type": "dynamic",
                        "visible": 1,
                        "rotation": 90,
                        "width": 125,
                        "height": 188,
                        "y": 1558.57223072996,
                        "x": 1079.35131770107
                    },
                    {
                        "igeId": "2ec0c8ef",
                        "restitution": "0",
                        "friction": "0",
                        "density": 0.5,
                        "gid": 545,
                        "name": "0",
                        "id": 185,
                        "type": "dynamic",
                        "visible": 1,
                        "rotation": -345.283256896096,
                        "width": 125,
                        "height": 188,
                        "y": 1072.12316096614,
                        "x": 444.896973673558
                    },
                    {
                        "x": 1136.59649122807,
                        "y": 2753,
                        "height": 161,
                        "width": 80.4736842105263,
                        "rotation": "0",
                        "visible": 1,
                        "type": "dynamic",
                        "id": 192,
                        "name": "0",
                        "gid": 544,
                        "density": 0.25,
                        "friction": "0",
                        "restitution": "0",
                        "igeId": "3ec1ed9c"
                    },
                    {
                        "igeId": "19e77a08",
                        "restitution": "0",
                        "friction": "0",
                        "density": 0.25,
                        "gid": 129,
                        "name": "0",
                        "id": 207,
                        "type": "dynamic",
                        "visible": 1,
                        "rotation": "0",
                        "width": 120,
                        "height": 120,
                        "y": 1619.33333333333,
                        "x": 1494.66666666667
                    },
                    {
                        "igeId": "14c91ad7",
                        "restitution": "0",
                        "friction": "0",
                        "density": 1,
                        "gid": 450,
                        "name": "0",
                        "id": 224,
                        "type": "dynamic",
                        "visible": 1,
                        "rotation": -191.683110670387,
                        "width": 60,
                        "height": 60,
                        "y": 713.516335531511,
                        "x": 1566.19041838482
                    },
                    {
                        "x": 1587.44383270257,
                        "y": 1052.861780473642,
                        "height": 56,
                        "width": 120,
                        "rotation": 190.04713176750911,
                        "visible": 1,
                        "type": "dynamic",
                        "id": 303,
                        "name": "0",
                        "gid": 542,
                        "density": 0.4,
                        "friction": "0",
                        "restitution": "0",
                        "igeId": "3a1ac48a"
                    },
                    {
                        "igeId": "20ccc42a",
                        "x": 1910,
                        "y": 1014,
                        "height": 58,
                        "width": 58,
                        "rotation": "0",
                        "visible": 1,
                        "type": "dynamic",
                        "id": 305,
                        "name": "0",
                        "gid": 538,
                        "density": 1,
                        "friction": "0",
                        "restitution": "0"
                    },
                    {
                        "x": 1170,
                        "y": 434,
                        "height": 46,
                        "width": 46,
                        "rotation": "0",
                        "visible": 1,
                        "type": "dynamic",
                        "id": 306,
                        "name": "0",
                        "gid": 513,
                        "density": 1.5,
                        "friction": "0",
                        "restitution": "0",
                        "igeId": "2934a49b"
                    },
                    {
                        "x": 1806.84325054109,
                        "y": 487.067104632805,
                        "height": 240,
                        "width": 124,
                        "rotation": -15.3200676034602,
                        "visible": 1,
                        "type": "dynamic",
                        "id": 308,
                        "name": "0",
                        "gid": 546,
                        "density": 0.15,
                        "friction": "0",
                        "restitution": "0",
                        "igeId": "28faf1a1"
                    },
                    {
                        "igeId": "412625c5",
                        "restitution": "0",
                        "friction": "0",
                        "density": 1,
                        "gid": 505,
                        "name": "0",
                        "id": 312,
                        "type": "dynamic",
                        "visible": 1,
                        "rotation": -40.0005745393972,
                        "width": 60,
                        "height": 60,
                        "y": 3113.08266523857,
                        "x": 1296.05623340109
                    }
                ],
                "name": "debris",
                "height": 57,
                "draworder": "topdown"
            },
            {
                "y": 0,
                "x": 0,
                "width": 35,
                "visible": true,
                "type": "tilelayer",
                "opacity": 1,
                "name": "walls",
                "height": 57,
                "data": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    237,
                    238,
                    239,
                    151,
                    120,
                    120,
                    120,
                    120,
                    120,
                    119,
                    20,
                    19,
                    0,
                    20,
                    0,
                    0,
                    19,
                    20,
                    109,
                    111,
                    111,
                    111,
                    114,
                    0,
                    519,
                    142,
                    111,
                    110,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    147,
                    0,
                    0,
                    0,
                    19,
                    0,
                    0,
                    0,
                    0,
                    138,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    138,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    147,
                    0,
                    0,
                    20,
                    0,
                    0,
                    0,
                    20,
                    0,
                    138,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    138,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    147,
                    0,
                    19,
                    19,
                    19,
                    0,
                    20,
                    20,
                    0,
                    138,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    138,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    150,
                    0,
                    0,
                    0,
                    0,
                    0,
                    147,
                    0,
                    0,
                    0,
                    20,
                    0,
                    20,
                    0,
                    0,
                    138,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    138,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    147,
                    0,
                    0,
                    0,
                    118,
                    120,
                    146,
                    19,
                    0,
                    0,
                    0,
                    0,
                    19,
                    19,
                    0,
                    139,
                    111,
                    111,
                    111,
                    110,
                    0,
                    0,
                    0,
                    0,
                    138,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    145,
                    120,
                    120,
                    120,
                    146,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    138,
                    0,
                    0,
                    0,
                    138,
                    0,
                    0,
                    0,
                    0,
                    138,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    138,
                    0,
                    0,
                    0,
                    138,
                    0,
                    0,
                    0,
                    0,
                    138,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    280,
                    282,
                    282,
                    282,
                    282,
                    281,
                    0,
                    0,
                    0,
                    0,
                    118,
                    123,
                    490,
                    151,
                    119,
                    0,
                    0,
                    0,
                    138,
                    0,
                    0,
                    0,
                    138,
                    0,
                    109,
                    114,
                    0,
                    138,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    286,
                    0,
                    0,
                    0,
                    0,
                    307,
                    282,
                    282,
                    120,
                    120,
                    146,
                    0,
                    0,
                    0,
                    147,
                    0,
                    0,
                    0,
                    138,
                    0,
                    0,
                    0,
                    138,
                    0,
                    138,
                    0,
                    0,
                    138,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    516,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    147,
                    0,
                    0,
                    142,
                    170,
                    111,
                    114,
                    0,
                    115,
                    0,
                    138,
                    0,
                    0,
                    138,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    516,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    150,
                    0,
                    0,
                    0,
                    147,
                    0,
                    0,
                    0,
                    138,
                    0,
                    0,
                    0,
                    0,
                    0,
                    138,
                    0,
                    0,
                    138,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    312,
                    0,
                    0,
                    0,
                    0,
                    312,
                    0,
                    0,
                    0,
                    0,
                    148,
                    120,
                    120,
                    120,
                    146,
                    0,
                    0,
                    0,
                    115,
                    0,
                    0,
                    0,
                    0,
                    0,
                    136,
                    112,
                    111,
                    137,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    309,
                    0,
                    0,
                    0,
                    280,
                    308,
                    0,
                    0,
                    0,
                    0,
                    147,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    435,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    115,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    280,
                    284,
                    282,
                    282,
                    282,
                    311,
                    0,
                    0,
                    0,
                    0,
                    0,
                    124,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    433,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    309,
                    0,
                    0,
                    0,
                    0,
                    309,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    433,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    309,
                    0,
                    0,
                    0,
                    0,
                    286,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    435,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    433,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    309,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    141,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    141,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    307,
                    281,
                    0,
                    313,
                    282,
                    283,
                    285,
                    0,
                    0,
                    313,
                    282,
                    283,
                    285,
                    0,
                    0,
                    313,
                    282,
                    282,
                    283,
                    113,
                    111,
                    111,
                    110,
                    0,
                    0,
                    0,
                    138,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    309,
                    0,
                    0,
                    0,
                    309,
                    0,
                    0,
                    0,
                    0,
                    0,
                    309,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    309,
                    0,
                    0,
                    0,
                    138,
                    0,
                    0,
                    0,
                    138,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    309,
                    0,
                    0,
                    0,
                    309,
                    0,
                    0,
                    0,
                    0,
                    0,
                    309,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    309,
                    0,
                    0,
                    0,
                    115,
                    518,
                    0,
                    518,
                    115,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    309,
                    0,
                    0,
                    0,
                    309,
                    0,
                    0,
                    0,
                    0,
                    0,
                    309,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    309,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    309,
                    0,
                    0,
                    0,
                    309,
                    0,
                    0,
                    0,
                    0,
                    0,
                    309,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    309,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    307,
                    285,
                    490,
                    313,
                    308,
                    0,
                    0,
                    0,
                    0,
                    0,
                    307,
                    282,
                    285,
                    490,
                    490,
                    490,
                    313,
                    308,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    118,
                    120,
                    120,
                    120,
                    120,
                    119,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    118,
                    123,
                    0,
                    0,
                    151,
                    121,
                    120,
                    120,
                    120,
                    120,
                    119,
                    0,
                    0,
                    0,
                    0,
                    147,
                    0,
                    0,
                    0,
                    0,
                    147,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    147,
                    0,
                    0,
                    0,
                    0,
                    147,
                    0,
                    0,
                    0,
                    0,
                    145,
                    120,
                    119,
                    0,
                    0,
                    147,
                    0,
                    0,
                    0,
                    0,
                    147,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    118,
                    123,
                    519,
                    0,
                    519,
                    151,
                    146,
                    0,
                    0,
                    0,
                    0,
                    147,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    147,
                    0,
                    0,
                    145,
                    119,
                    0,
                    0,
                    0,
                    147,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    147,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    147,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    147,
                    0,
                    0,
                    0,
                    145,
                    123,
                    0,
                    151,
                    146,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    147,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    147,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    147,
                    0,
                    0,
                    0,
                    0,
                    237,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    147,
                    0,
                    0,
                    0,
                    0,
                    0,
                    150,
                    0,
                    0,
                    0,
                    0,
                    145,
                    120,
                    120,
                    123,
                    0,
                    0,
                    151,
                    122,
                    120,
                    120,
                    119,
                    0,
                    239,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    147,
                    0,
                    0,
                    0,
                    0,
                    0,
                    147,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    147,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    145,
                    120,
                    120,
                    121,
                    120,
                    120,
                    146,
                    0,
                    118,
                    120,
                    120,
                    121,
                    123,
                    0,
                    0,
                    151,
                    121,
                    120,
                    123,
                    0,
                    0,
                    124,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    124,
                    0,
                    0,
                    0,
                    0,
                    124,
                    0,
                    0,
                    147,
                    0,
                    0,
                    0,
                    0,
                    147,
                    0,
                    0,
                    0,
                    0,
                    491,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    118,
                    123,
                    0,
                    0,
                    0,
                    0,
                    147,
                    0,
                    0,
                    0,
                    0,
                    147,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    147,
                    0,
                    0,
                    0,
                    0,
                    0,
                    147,
                    0,
                    0,
                    0,
                    0,
                    147,
                    0,
                    0,
                    0,
                    0,
                    150,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    151,
                    120,
                    149,
                    0,
                    0,
                    0,
                    0,
                    0,
                    147,
                    0,
                    0,
                    0,
                    0,
                    147,
                    0,
                    0,
                    0,
                    0,
                    147,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    145,
                    123,
                    518,
                    518,
                    518,
                    151,
                    122,
                    120,
                    120,
                    120,
                    120,
                    122,
                    120,
                    120,
                    120,
                    120,
                    146,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            {
                "y": 0,
                "x": 0,
                "width": 35,
                "visible": true,
                "type": "tilelayer",
                "opacity": 1,
                "name": "trees",
                "height": 57,
                "data": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    181,
                    182,
                    0,
                    0,
                    181,
                    182,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    208,
                    209,
                    0,
                    0,
                    208,
                    209,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    181,
                    182,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    208,
                    209,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    181,
                    182,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    208,
                    209,
                    0,
                    0,
                    0,
                    0,
                    181,
                    182,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    208,
                    209,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    181,
                    182,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    208,
                    209,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    181,
                    182,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    208,
                    209,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    181,
                    182,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    208,
                    209,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    181,
                    182,
                    0,
                    181,
                    182,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    208,
                    209,
                    0,
                    208,
                    209,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    181,
                    182,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    208,
                    209,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            }
        ],
        "height": 57
    },
    "states": {
        "zTzPFYOZkc": {
            "name": "default",
            "sound": {

            },
            "particles": {

            },
            "animation": "TpsmgGVfi5"
        },
        "selected": {
            "name": "selected",
            "animation": "TpsmgGVfi5",
            "body": "selected",
            "particles": {

            },
            "sound": {

            }
        },
        "unSelected": {
            "name": "unselected",
            "animation": "TpsmgGVfi5",
            "body": "unSelected",
            "particles": {

            },
            "sound": {

            }
        },
        "dropped": {
            "name": "dropped",
            "animation": "TpsmgGVfi5",
            "body": "dropped",
            "particles": {

            },
            "sound": {

            }
        },
        "4V2PAY2itK": {
            "sound": {

            },
            "particles": {

            },
            "body": "TX8R6XstID",
            "animation": "",
            "name": "immune"
        },
        "b3Wa0HmxxV": {
            "name": "test",
            "animation": "",
            "body": "dropped",
            "particles": {

            },
            "sound": {

            }
        }
    },
    "animationTypes": {
        "TpsmgGVfi5": {
            "name": "default",
            "frames": [
                1
            ],
            "loopCount": 0,
            "framesPerSecond": 0
        },
        "default": {
            "name": "default",
            "frames": [
                1
            ],
            "loopCount": 0,
            "framesPerSecond": 0
        }
    },
    "shops": {
        "h7JhXYNhvn": {
            "itemTypes": {
                "stick": {
                    "quantity": 1,
                    "price": {
                        "requiredItemTypes": [],
                        "playerAttributes": {
                            "n5JEoENeGg": 500
                        }
                    },
                    "requirement": {
                        "playerAttributes": {

                        },
                        "requiredItemTypes": []
                    },
                    "isPurchasable": true,
                    "hideIfUnaffordable": false,
                    "hideIfRequirementNotMet": false
                },
                "pill": {
                    "price": {
                        "requiredItemTypes": [],
                        "playerAttributes": {
                            "n5JEoENeGg": 200
                        }
                    },
                    "requirement": {
                        "playerAttributes": {

                        },
                        "requiredItemTypes": []
                    },
                    "isPurchasable": true,
                    "hideIfUnaffordable": false,
                    "hideIfRequirementNotMet": false,
                    "quantity": 1
                },
                "baseball_bat": {
                    "quantity": 1,
                    "price": {
                        "playerAttributes": {
                            "n5JEoENeGg": 1000
                        },
                        "requiredItemTypes": []
                    },
                    "requirement": {
                        "playerAttributes": {

                        },
                        "requiredItemTypes": []
                    },
                    "isPurchasable": true,
                    "hideIfUnaffordable": false,
                    "hideIfRequirementNotMet": false
                },
                "katana": {
                    "quantity": 1,
                    "price": {
                        "playerAttributes": {
                            "n5JEoENeGg": 1500
                        },
                        "requiredItemTypes": []
                    },
                    "requirement": {
                        "playerAttributes": {

                        },
                        "requiredItemTypes": []
                    },
                    "isPurchasable": true,
                    "hideIfUnaffordable": false,
                    "hideIfRequirementNotMet": false
                },
                "potato_gun": {
                    "price": {
                        "playerAttributes": {
                            "n5JEoENeGg": 3500
                        },
                        "requiredItemTypes": []
                    },
                    "requirement": {
                        "playerAttributes": {

                        },
                        "requiredItemTypes": []
                    },
                    "isPurchasable": true,
                    "hideIfUnaffordable": false,
                    "hideIfRequirementNotMet": false
                },
                "AXgwzWco1k": {
                    "hideIfRequirementNotMet": false,
                    "hideIfUnaffordable": false,
                    "isPurchasable": true,
                    "quantity": null,
                    "requirement": {
                        "requiredItemTypes": [],
                        "playerAttributes": {

                        }
                    },
                    "price": {
                        "coins": 0,
                        "requiredItemTypes": [],
                        "playerAttributes": {
                            "n5JEoENeGg": 10000
                        }
                    }
                },
                "czcULq1xee": {
                    "hideIfRequirementNotMet": false,
                    "hideIfUnaffordable": false,
                    "isPurchasable": true,
                    "quantity": 1,
                    "requirement": {
                        "requiredItemTypes": [],
                        "playerAttributes": {

                        }
                    },
                    "price": {
                        "coins": "",
                        "requiredItemTypes": [],
                        "playerAttributes": {
                            "n5JEoENeGg": 800
                        }
                    }
                },
                "DJyf6xBq1E": {
                    "hideIfRequirementNotMet": false,
                    "hideIfUnaffordable": false,
                    "isPurchasable": true,
                    "quantity": "",
                    "requirement": {
                        "requiredItemTypes": [],
                        "playerAttributes": {

                        }
                    },
                    "price": {
                        "coins": 0,
                        "requiredItemTypes": [],
                        "playerAttributes": {
                            "n5JEoENeGg": 2000
                        }
                    }
                },
                "WMyjavpDLl": {
                    "hideIfRequirementNotMet": false,
                    "hideIfUnaffordable": false,
                    "isPurchasable": true,
                    "quantity": "",
                    "requirement": {
                        "requiredItemTypes": [],
                        "playerAttributes": {

                        }
                    },
                    "price": {
                        "coins": 0,
                        "requiredItemTypes": [],
                        "playerAttributes": {
                            "n5JEoENeGg": 10000
                        }
                    }
                },
                "yarrzbCUwX": {
                    "price": {
                        "playerAttributes": {
                            "n5JEoENeGg": 2000
                        },
                        "requiredItemTypes": [],
                        "coins": 0
                    },
                    "requirement": {
                        "playerAttributes": {

                        },
                        "requiredItemTypes": []
                    },
                    "quantity": "",
                    "isPurchasable": true,
                    "hideIfUnaffordable": false,
                    "hideIfRequirementNotMet": false
                }
            },
            "name": "Humans Shop",
            "dismissible": true,
            "unitTypes": {

            }
        }
    },
    "bodyTypes": {
        "TX8R6XstID": {
            "spriteScale": 1,
            "fixtures": [
                {
                    "shape": {
                        "type": "rectangle"
                    },
                    "restitution": 0,
                    "friction": 0.01,
                    "density": 2,
                    "isSensor": false
                }
            ],
            "isFlying": false,
            "fixedRotation": false,
            "bullet": false,
            "allowSleep": true,
            "angularDamping": 1,
            "linearDamping": 5,
            "rotationSpeed": 2,
            "type": "dynamic",
            "height": 40,
            "width": 40,
            "collidesWith": {
                "units": true,
                "items": true,
                "projectiles": true,
                "walls": true,
                "unit": true,
                "item": true,
                "debris": true
            },
            "z-index": {
                "layer": 3,
                "depth": 3
            },
            "name": "Human"
        },
        "azvwdSVsbT": {
            "collidesWith": {
                "debris": true,
                "item": true,
                "unit": true,
                "walls": true,
                "projectiles": true,
                "items": true,
                "units": true
            },
            "width": 40,
            "height": 40,
            "type": "dynamic",
            "rotationSpeed": 2,
            "linearDamping": 5,
            "angularDamping": 1,
            "allowSleep": true,
            "bullet": false,
            "fixedRotation": false,
            "isFlying": false,
            "fixtures": [
                {
                    "density": 3,
                    "friction": 0.01,
                    "restitution": 0.01,
                    "shape": {
                        "type": "rectangle"
                    }
                }
            ],
            "name": "Zombie King"
        },
        "tUCX1SyqgR": {
            "spriteScale": 1,
            "z-index": {
                "depth": 3,
                "layer": 3
            },
            "collidesWith": {
                "debris": true,
                "item": true,
                "unit": true,
                "walls": true,
                "projectiles": true,
                "items": true,
                "units": true
            },
            "width": 44,
            "height": 44,
            "type": "dynamic",
            "rotationSpeed": 2,
            "linearDamping": 5,
            "angularDamping": 1,
            "allowSleep": true,
            "bullet": false,
            "fixedRotation": false,
            "isFlying": false,
            "fixtures": [
                {
                    "isSensor": false,
                    "density": "1.2",
                    "friction": "0.01",
                    "restitution": 3,
                    "shape": {
                        "type": "circle"
                    }
                }
            ],
            "name": "Zombie"
        },
        "SXqUbUqGWN": {
            "z-index": {
                "debris": 3,
                "layer": 3
            },
            "collidesWith": {
                "debris": true,
                "item": true,
                "unit": true,
                "walls": true,
                "projectiles": true,
                "items": true,
                "units": true
            },
            "width": 40,
            "height": 40,
            "type": "dynamic",
            "rotationSpeed": 2,
            "linearDamping": 5,
            "angularDamping": 1,
            "allowSleep": true,
            "bullet": false,
            "fixedRotation": false,
            "isFlying": false,
            "fixtures": [
                {
                    "density": 3,
                    "friction": 0.01,
                    "restitution": 0.01,
                    "shape": {
                        "type": "rectangle"
                    }
                }
            ],
            "name": "Sick"
        },
        "ojpp9iHnyr": {
            "type": "dynamic",
            "friction": 0,
            "width": 6,
            "height": 14,
            "holdPosition": {
                "x": 0,
                "y": 33,
                "rotation": 0
            },
            "linearDamping": 1,
            "angularDamping": 1,
            "restitution": 1,
            "density": 1,
            "isTangible": true,
            "isFlying": false,
            "carriedBy": [
                "human",
                "PhuHFB46b2"
            ],
            "rotationSpeed": 3,
            "jointType": "weldJoint",
            "unitAnchor": {
                "x": 0,
                "y": 20,
                "rotation": 0
            },
            "itemAnchor": {
                "x": 0,
                "y": 0
            },
            "collidesWith": {
                "units": true,
                "items": true,
                "projectiles": true,
                "walls": true,
                "unit": true,
                "item": true,
                "debris": true
            },
            "typeWhenDrop": "dynamic",
            "z-index": {
                "layer": 3,
                "depth": 4
            },
            "fixedRotation": false,
            "name": "Stick"
        },
        "cU35xPN8Gb": {
            "friction": 0,
            "fixedRotation": false,
            "z-index": {
                "depth": 4,
                "layer": 3
            },
            "typeWhenDrop": "dynamic",
            "type": "dynamic",
            "collidesWith": {
                "unit": true,
                "item": true,
                "walls": false,
                "projectiles": false,
                "items": false,
                "units": false
            },
            "itemAnchor": {
                "y": 0,
                "x": 0
            },
            "unitAnchor": {
                "rotation": 0,
                "y": 33,
                "x": 0
            },
            "jointType": "weldJoint",
            "rotationSpeed": 3,
            "carriedBy": [
                "human"
            ],
            "isFlying": false,
            "isTangible": true,
            "density": 1,
            "restitution": 1,
            "angularDamping": 1,
            "linearDamping": 1,
            "holdPosition": {
                "rotation": 0,
                "y": 33,
                "x": 0
            },
            "height": 20,
            "width": 12,
            "name": "Drumstick"
        },
        "FGJP33Mdln": {
            "friction": 0,
            "width": 20,
            "height": 40,
            "holdPosition": {
                "x": 0,
                "y": 33,
                "rotation": 0
            },
            "linearDamping": 1,
            "angularDamping": 1,
            "restitution": 1,
            "density": 1,
            "isTangible": true,
            "isFlying": false,
            "carriedBy": [
                "human"
            ],
            "rotationSpeed": 3,
            "jointType": "weldJoint",
            "unitAnchor": {
                "x": 0,
                "y": 20,
                "rotation": 0
            },
            "itemAnchor": {
                "y": 0,
                "x": 0
            },
            "collidesWith": {
                "units": false,
                "items": false,
                "projectiles": false,
                "walls": false,
                "unit": false,
                "item": false
            },
            "type": "dynamic",
            "name": "Pill"
        },
        "Xg7balKn95": {
            "friction": 0,
            "collidesWith": {
                "debris": true,
                "item": true,
                "unit": true,
                "walls": true,
                "projectiles": true,
                "items": true,
                "units": true
            },
            "itemAnchor": {
                "y": 0,
                "x": 0
            },
            "unitAnchor": {
                "rotation": 0,
                "y": 28,
                "x": 0
            },
            "jointType": "weldJoint",
            "rotationSpeed": 3,
            "carriedBy": [
                "human"
            ],
            "isFlying": false,
            "isTangible": true,
            "density": 1,
            "restitution": 1,
            "angularDamping": 1,
            "linearDamping": 1,
            "holdPosition": {
                "rotation": 0,
                "y": 33,
                "x": 0
            },
            "height": 42,
            "width": 10,
            "type": "dynamic",
            "typeWhenDrop": "dynamic",
            "z-index": {
                "layer": 3,
                "depth": 4
            },
            "fixedRotation": false,
            "name": "Crowbar"
        },
        "ShqM8sXXzO": {
            "friction": 0,
            "collidesWith": {
                "debris": true,
                "item": true,
                "unit": true,
                "walls": true,
                "projectiles": true,
                "items": true,
                "units": true
            },
            "itemAnchor": {
                "y": 0,
                "x": 0
            },
            "unitAnchor": {
                "rotation": 0,
                "y": 30,
                "x": 0
            },
            "jointType": "weldJoint",
            "rotationSpeed": 3,
            "carriedBy": [
                "human",
                "PhuHFB46b2"
            ],
            "isFlying": false,
            "isTangible": true,
            "density": 1,
            "restitution": 1,
            "angularDamping": 1,
            "linearDamping": 1,
            "holdPosition": {
                "rotation": 0,
                "y": 33,
                "x": 0
            },
            "height": 42,
            "width": 12,
            "type": "dynamic",
            "typeWhenDrop": "dynamic",
            "z-index": {
                "layer": 3,
                "depth": 4
            },
            "fixedRotation": false,
            "name": "Baseball Bat"
        },
        "qQYXKw2tnK": {
            "friction": 0,
            "collidesWith": {
                "debris": true,
                "item": true,
                "unit": true,
                "walls": true,
                "projectiles": true,
                "items": true,
                "units": true
            },
            "itemAnchor": {
                "x": 0,
                "y": 0
            },
            "unitAnchor": {
                "rotation": 0,
                "y": 35,
                "x": 0
            },
            "jointType": "none",
            "rotationSpeed": 3,
            "carriedBy": [
                "human"
            ],
            "isFlying": false,
            "isTangible": true,
            "density": 1,
            "restitution": 1,
            "angularDamping": 1,
            "linearDamping": 1,
            "holdPosition": {
                "rotation": 0,
                "y": 33,
                "x": 0
            },
            "height": 70,
            "width": 12,
            "type": "dynamic",
            "typeWhenDrop": "dynamic",
            "z-index": {
                "layer": 3,
                "depth": 4
            },
            "fixedRotation": false,
            "name": "Katana"
        },
        "KNXXTJIO9I": {
            "fixedRotation": false,
            "z-index": {
                "depth": 4,
                "layer": 3
            },
            "typeWhenDrop": "dynamic",
            "type": "dynamic",
            "collidesWith": {
                "walls": false,
                "projectiles": false,
                "items": false,
                "units": false
            },
            "unitAnchor": {
                "rotation": 0,
                "y": 33,
                "x": 0
            },
            "rotationSpeed": 3,
            "itemAnchor": {
                "y": 0,
                "x": 0
            },
            "jointType": "none",
            "width": 8,
            "height": 20,
            "holdPosition": {
                "rotation": 0,
                "y": 33,
                "x": 0
            },
            "linearDamping": 1,
            "angularDamping": 1,
            "restitution": 1,
            "density": 1,
            "isTangible": false,
            "isFlying": false,
            "carriedBy": [
                "human"
            ],
            "friction": 0,
            "name": "Glock"
        },
        "It8iS5lrJt": {
            "carriedBy": [
                "human"
            ],
            "isFlying": false,
            "isTangible": false,
            "density": 1,
            "restitution": 1,
            "angularDamping": 1,
            "linearDamping": 1,
            "holdPosition": {
                "x": 0,
                "y": 33,
                "rotation": 0
            },
            "height": 36,
            "width": 16,
            "jointType": "none",
            "itemAnchor": {
                "x": 0,
                "y": 30
            },
            "rotationSpeed": 3,
            "unitAnchor": {
                "x": 0,
                "y": 33,
                "rotation": 0
            },
            "collidesWith": {
                "units": false,
                "items": false,
                "projectiles": false,
                "walls": false
            },
            "friction": 0,
            "type": "dynamic",
            "typeWhenDrop": "dynamic",
            "z-index": {
                "layer": 3,
                "depth": 4
            },
            "fixedRotation": false,
            "name": "Shotgun"
        },
        "X5pkBSzg1d": {
            "fixedRotation": false,
            "z-index": {
                "depth": 4,
                "layer": 3
            },
            "typeWhenDrop": "dynamic",
            "type": "dynamic",
            "carriedBy": [
                "human",
                "PhuHFB46b2"
            ],
            "isFlying": false,
            "isTangible": false,
            "density": 1,
            "restitution": 1,
            "angularDamping": 1,
            "linearDamping": 1,
            "holdPosition": {
                "x": 0,
                "y": 33,
                "rotation": 0
            },
            "height": 36,
            "width": 8,
            "jointType": "weldJoint",
            "itemAnchor": {
                "y": 0,
                "x": 0
            },
            "rotationSpeed": 3,
            "unitAnchor": {
                "x": 0,
                "y": 33,
                "rotation": 0
            },
            "collidesWith": {
                "units": false,
                "items": false,
                "projectiles": false,
                "walls": false
            },
            "friction": 0,
            "name": "AK-47"
        },
        "yy8y6fMCJF": {
            "type": "dynamic",
            "collidesWith": {
                "walls": true,
                "projectiles": true,
                "items": true,
                "units": true,
                "debris": true
            },
            "itemAnchor": {
                "y": 0,
                "x": 0
            },
            "unitAnchor": {
                "rotation": 0,
                "y": 33,
                "x": 0
            },
            "jointType": "weldJoint",
            "rotationSpeed": 3,
            "width": 12,
            "height": 40,
            "holdPosition": {
                "rotation": 0,
                "y": 40,
                "x": 0
            },
            "linearDamping": 1,
            "angularDamping": 1,
            "restitution": 1,
            "density": 1,
            "isTangible": false,
            "isFlying": false,
            "carriedBy": [
                "human",
                "PhuHFB46b2"
            ],
            "friction": 0,
            "typeWhenDrop": "dynamic",
            "z-index": {
                "layer": 3,
                "depth": 4
            },
            "fixedRotation": false,
            "name": "Potato Gun"
        },
        "lwmZqjmBFv": {
            "collidesWith": {
                "walls": false,
                "projectiles": false,
                "items": false,
                "units": false
            },
            "unitAnchor": {
                "rotation": 0,
                "y": 33,
                "x": 0
            },
            "rotationSpeed": 3,
            "itemAnchor": {
                "y": 0,
                "x": 0
            },
            "jointType": "weldJoint",
            "width": 26,
            "height": 78,
            "holdPosition": {
                "rotation": 0,
                "y": 55,
                "x": 0
            },
            "linearDamping": 1,
            "angularDamping": 1,
            "restitution": 1,
            "density": 1,
            "isTangible": false,
            "isFlying": false,
            "carriedBy": [
                "human"
            ],
            "friction": 0,
            "name": "Minigun"
        },
        "PjJPU2oGiM": {
            "fixtures": [
                {
                    "isSensor": false,
                    "shape": {
                        "type": "rectangle"
                    },
                    "restitution": 0,
                    "friction": 0.01,
                    "density": 1
                }
            ],
            "spriteScale": 1,
            "allowSleep": true,
            "bullet": false,
            "fixedRotation": false,
            "z-index": {
                "depth": 3,
                "layer": 3
            },
            "name": "Coin",
            "type": "dynamic",
            "width": 32,
            "height": 32,
            "linearDamping": 1,
            "angularDamping": 1,
            "restitution": 1,
            "density": 1,
            "friction": 0,
            "collidesWith": {
                "units": false,
                "items": false,
                "projectiles": false,
                "walls": false,
                "debris": false
            },
            "carriedBy": [
                "human",
                "PhuHFB46b2"
            ],
            "rotationSpeed": 3,
            "jointType": "weldJoint",
            "unitAnchor": {
                "x": 0,
                "y": 33,
                "rotation": 0
            },
            "itemAnchor": {
                "x": 0,
                "y": 0
            }
        },
        "2Ud5pQbq7b": {
            "itemAnchor": {
                "upperAngle": 0,
                "lowerAngle": 0,
                "y": 0,
                "x": 0
            },
            "unitAnchor": {
                "rotation": 0,
                "y": 33,
                "x": 0
            },
            "jointType": "weldJoint",
            "spriteScale": 1,
            "rotationSpeed": 3,
            "z-index": {
                "depth": 3,
                "layer": 3
            },
            "name": "Potato",
            "collidesWith": {
                "debris": true,
                "walls": true,
                "projectiles": false,
                "items": true,
                "units": true
            },
            "linearDamping": 1,
            "angularDamping": 1,
            "type": "dynamic",
            "allowSleep": true,
            "bullet": true,
            "fixedRotation": false,
            "fixtures": [
                {
                    "friction": "0.1",
                    "isSensor": false,
                    "density": 90,
                    "restitution": 0.1,
                    "shape": {
                        "type": "rectangle"
                    }
                }
            ],
            "texture": "https://s3-us-west-1.amazonaws.com/modd/halloween-0.18/spritesheet/potato.png",
            "width": 9,
            "height": 23
        },
        "selected": {
            "fixtures": [
                {
                    "shape": {
                        "type": "rectangle"
                    },
                    "restitution": 0,
                    "friction": 0,
                    "density": 1,
                    "isSensor": false
                }
            ],
            "spriteScale": 1,
            "allowSleep": true,
            "bullet": false,
            "type": "spriteOnly",
            "collidesWith": {
                "debris": false,
                "walls": false,
                "projectiles": true,
                "items": true,
                "units": true
            },
            "itemAnchor": {
                "x": 0,
                "y": 0
            },
            "unitAnchor": {
                "rotation": 0,
                "y": 26,
                "x": 0
            },
            "jointType": "weldJoint",
            "rotationSpeed": 3,
            "width": 6,
            "height": 24,
            "holdPosition": {
                "rotation": 0,
                "y": 40,
                "x": 0
            },
            "linearDamping": 0,
            "angularDamping": 1,
            "restitution": 1,
            "density": 1,
            "isTangible": false,
            "isFlying": false,
            "carriedBy": [
                "human",
                "PhuHFB46b2"
            ],
            "friction": 0,
            "typeWhenDrop": "dynamic",
            "z-index": {
                "depth": 3,
                "layer": 3
            },
            "fixedRotation": false,
            "name": "selected"
        },
        "unSelected": {
            "type": "none",
            "collidesWith": {
                "debris": false,
                "walls": true,
                "projectiles": true,
                "items": true,
                "units": true
            },
            "itemAnchor": {
                "y": 0,
                "x": 0
            },
            "unitAnchor": {
                "rotation": 0,
                "y": 33,
                "x": 0
            },
            "jointType": "weldJoint",
            "rotationSpeed": 3,
            "width": 12,
            "height": 40,
            "holdPosition": {
                "rotation": 0,
                "y": 40,
                "x": 0
            },
            "linearDamping": 1,
            "angularDamping": 1,
            "restitution": 1,
            "density": 1,
            "isTangible": false,
            "isFlying": false,
            "carriedBy": [
                "human",
                "PhuHFB46b2"
            ],
            "friction": 0,
            "typeWhenDrop": "dynamic",
            "z-index": {
                "depth": 3,
                "layer": 3
            },
            "fixedRotation": false,
            "name": "unselected"
        },
        "dropped": {
            "type": "static",
            "collidesWith": {
                "debris": false,
                "walls": false,
                "projectiles": false,
                "items": false,
                "units": true
            },
            "itemAnchor": {
                "y": 0,
                "x": 0
            },
            "unitAnchor": {
                "rotation": 0,
                "y": 26,
                "x": 0
            },
            "jointType": "none",
            "rotationSpeed": 3,
            "width": 6,
            "height": 24,
            "holdPosition": {
                "rotation": 0,
                "y": 40,
                "x": 0
            },
            "linearDamping": 1,
            "angularDamping": 1,
            "restitution": 1,
            "density": 1,
            "isTangible": false,
            "isFlying": false,
            "carriedBy": [
                "human",
                "PhuHFB46b2"
            ],
            "friction": 0,
            "typeWhenDrop": "dynamic",
            "z-index": {
                "depth": 1,
                "layer": 1
            },
            "fixedRotation": false,
            "name": "dropped",
            "bullet": false,
            "allowSleep": true,
            "spriteScale": 1,
            "fixtures": [
                {
                    "density": 1,
                    "friction": 0.01,
                    "restitution": 0.01,
                    "shape": {
                        "type": "rectangle"
                    },
                    "isSensor": true
                }
            ]
        },
        "default": {
            "itemAnchor": {
                "upperAngle": 0,
                "lowerAngle": 0,
                "y": 0,
                "x": 0
            },
            "unitAnchor": {
                "rotation": 0,
                "y": 33,
                "x": 0
            },
            "jointType": "weldJoint",
            "fixtures": [
                {
                    "isSensor": false,
                    "shape": {
                        "type": "rectangle"
                    },
                    "restitution": 0.01,
                    "friction": 0.01,
                    "density": 1
                }
            ],
            "spriteScale": 1,
            "rotationSpeed": 3,
            "linearDamping": 5,
            "angularDamping": 1,
            "collidesWith": {
                "debris": false,
                "walls": false,
                "projectiles": false,
                "items": false,
                "units": true
            },
            "allowSleep": true,
            "bullet": false,
            "fixedRotation": false,
            "z-index": {
                "depth": 3,
                "layer": 3
            },
            "height": 62,
            "width": 62,
            "type": "dynamic",
            "name": "default"
        }
    },
    "dialogues": {

    }
};

export default GameData;