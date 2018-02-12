// ====================================================================================================
//
// Cloud Code for GAME_DATA, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================
// MIT License
// Copyright (c) 2018 Ittipon Teerapruettikulchai
// ====================================================================================================
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// ====================================================================================================
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// ====================================================================================================
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
// ====================================================================================================

var gameDatabase = {"items":{"BlackKnight":{"id":"BlackKnight","category":"","itemTier":{"id":"0-White","maxLevel":20,"expTable":{"minValue":10,"maxValue":2206,"growth":2.5},"sellPriceTable":{"minValue":100,"maxValue":2000,"growth":1},"levelUpPriceTable":{"minValue":50,"maxValue":1000,"growth":1},"rewardExpTable":{"minValue":7,"maxValue":1544,"growth":2.5},"evolvePrice":1000,"sortWeight":0},"type":"CharacterItem","maxStack":1,"useFixSellPrice":0,"fixSellPrice":0,"useFixLevelUpPrice":0,"fixLevelUpPrice":0,"useFixRewardExp":0,"fixRewardExp":0,"evolveInfo":{"requiredMaterials":[{"id":"RedMushroom","amount":1}],"evolveItem":"BlackKnight 1"}},"Shaman":{"id":"Shaman","category":"","itemTier":{"id":"0-White","maxLevel":20,"expTable":{"minValue":10,"maxValue":2206,"growth":2.5},"sellPriceTable":{"minValue":100,"maxValue":2000,"growth":1},"levelUpPriceTable":{"minValue":50,"maxValue":1000,"growth":1},"rewardExpTable":{"minValue":7,"maxValue":1544,"growth":2.5},"evolvePrice":1000,"sortWeight":0},"type":"CharacterItem","maxStack":1,"useFixSellPrice":0,"fixSellPrice":0,"useFixLevelUpPrice":0,"fixLevelUpPrice":0,"useFixRewardExp":0,"fixRewardExp":0,"evolveInfo":{"requiredMaterials":[{"id":"RedMushroom","amount":1}],"evolveItem":"Shaman 1"}},"Thief":{"id":"Thief","category":"","itemTier":{"id":"0-White","maxLevel":20,"expTable":{"minValue":10,"maxValue":2206,"growth":2.5},"sellPriceTable":{"minValue":100,"maxValue":2000,"growth":1},"levelUpPriceTable":{"minValue":50,"maxValue":1000,"growth":1},"rewardExpTable":{"minValue":7,"maxValue":1544,"growth":2.5},"evolvePrice":1000,"sortWeight":0},"type":"CharacterItem","maxStack":1,"useFixSellPrice":0,"fixSellPrice":0,"useFixLevelUpPrice":0,"fixLevelUpPrice":0,"useFixRewardExp":0,"fixRewardExp":0,"evolveInfo":{"requiredMaterials":[{"id":"RedMushroom","amount":1}],"evolveItem":"Thief 1"}},"RedMushroom":{"id":"RedMushroom","category":"","itemTier":{"id":"0-White","maxLevel":20,"expTable":{"minValue":10,"maxValue":2206,"growth":2.5},"sellPriceTable":{"minValue":100,"maxValue":2000,"growth":1},"levelUpPriceTable":{"minValue":50,"maxValue":1000,"growth":1},"rewardExpTable":{"minValue":7,"maxValue":1544,"growth":2.5},"evolvePrice":1000,"sortWeight":0},"type":"CharacterItem","maxStack":1,"useFixSellPrice":1,"fixSellPrice":1000000,"useFixLevelUpPrice":0,"fixLevelUpPrice":0,"useFixRewardExp":1,"fixRewardExp":1000000,"evolveInfo":{"requiredMaterials":[],"evolveItem":""}},"BlackKnight 1":{"id":"BlackKnight 1","category":"","itemTier":{"id":"1-Green","maxLevel":40,"expTable":{"minValue":10,"maxValue":6364,"growth":2.5},"sellPriceTable":{"minValue":100,"maxValue":4000,"growth":1},"levelUpPriceTable":{"minValue":50,"maxValue":2000,"growth":1},"rewardExpTable":{"minValue":7,"maxValue":4455,"growth":2.5},"evolvePrice":5000,"sortWeight":0},"type":"CharacterItem","maxStack":1,"useFixSellPrice":0,"fixSellPrice":0,"useFixLevelUpPrice":0,"fixLevelUpPrice":0,"useFixRewardExp":0,"fixRewardExp":0,"evolveInfo":{"requiredMaterials":[{"id":"RedMushroom","amount":1}],"evolveItem":"BlackKnight 2"}},"BlackKnight 2":{"id":"BlackKnight 2","category":"","itemTier":{"id":"2-Blue","maxLevel":60,"expTable":{"minValue":10,"maxValue":11766,"growth":2.5},"sellPriceTable":{"minValue":100,"maxValue":6000,"growth":1},"levelUpPriceTable":{"minValue":50,"maxValue":3000,"growth":1},"rewardExpTable":{"minValue":7,"maxValue":8236,"growth":2.5},"evolvePrice":10000,"sortWeight":0},"type":"CharacterItem","maxStack":1,"useFixSellPrice":0,"fixSellPrice":0,"useFixLevelUpPrice":0,"fixLevelUpPrice":0,"useFixRewardExp":0,"fixRewardExp":0,"evolveInfo":{"requiredMaterials":[{"id":"RedMushroom","amount":1}],"evolveItem":"BlackKnight 3"}},"BlackKnight 3":{"id":"BlackKnight 3","category":"","itemTier":{"id":"3-Purple","maxLevel":80,"expTable":{"minValue":10,"maxValue":18172,"growth":2.5},"sellPriceTable":{"minValue":100,"maxValue":8000,"growth":1},"levelUpPriceTable":{"minValue":50,"maxValue":4000,"growth":1},"rewardExpTable":{"minValue":7,"maxValue":12720,"growth":2.5},"evolvePrice":25000,"sortWeight":0},"type":"CharacterItem","maxStack":1,"useFixSellPrice":0,"fixSellPrice":0,"useFixLevelUpPrice":0,"fixLevelUpPrice":0,"useFixRewardExp":0,"fixRewardExp":0,"evolveInfo":{"requiredMaterials":[{"id":"RedMushroom","amount":1}],"evolveItem":""}},"Shaman 1":{"id":"Shaman 1","category":"","itemTier":{"id":"1-Green","maxLevel":40,"expTable":{"minValue":10,"maxValue":6364,"growth":2.5},"sellPriceTable":{"minValue":100,"maxValue":4000,"growth":1},"levelUpPriceTable":{"minValue":50,"maxValue":2000,"growth":1},"rewardExpTable":{"minValue":7,"maxValue":4455,"growth":2.5},"evolvePrice":5000,"sortWeight":0},"type":"CharacterItem","maxStack":1,"useFixSellPrice":0,"fixSellPrice":0,"useFixLevelUpPrice":0,"fixLevelUpPrice":0,"useFixRewardExp":0,"fixRewardExp":0,"evolveInfo":{"requiredMaterials":[{"id":"RedMushroom","amount":1}],"evolveItem":"Shaman 2"}},"Shaman 2":{"id":"Shaman 2","category":"","itemTier":{"id":"2-Blue","maxLevel":60,"expTable":{"minValue":10,"maxValue":11766,"growth":2.5},"sellPriceTable":{"minValue":100,"maxValue":6000,"growth":1},"levelUpPriceTable":{"minValue":50,"maxValue":3000,"growth":1},"rewardExpTable":{"minValue":7,"maxValue":8236,"growth":2.5},"evolvePrice":10000,"sortWeight":0},"type":"CharacterItem","maxStack":1,"useFixSellPrice":0,"fixSellPrice":0,"useFixLevelUpPrice":0,"fixLevelUpPrice":0,"useFixRewardExp":0,"fixRewardExp":0,"evolveInfo":{"requiredMaterials":[{"id":"RedMushroom","amount":1}],"evolveItem":"Shaman 3"}},"Shaman 3":{"id":"Shaman 3","category":"","itemTier":{"id":"3-Purple","maxLevel":80,"expTable":{"minValue":10,"maxValue":18172,"growth":2.5},"sellPriceTable":{"minValue":100,"maxValue":8000,"growth":1},"levelUpPriceTable":{"minValue":50,"maxValue":4000,"growth":1},"rewardExpTable":{"minValue":7,"maxValue":12720,"growth":2.5},"evolvePrice":25000,"sortWeight":0},"type":"CharacterItem","maxStack":1,"useFixSellPrice":0,"fixSellPrice":0,"useFixLevelUpPrice":0,"fixLevelUpPrice":0,"useFixRewardExp":0,"fixRewardExp":0,"evolveInfo":{"requiredMaterials":[{"id":"RedMushroom","amount":1}],"evolveItem":""}},"Thief 1":{"id":"Thief 1","category":"","itemTier":{"id":"1-Green","maxLevel":40,"expTable":{"minValue":10,"maxValue":6364,"growth":2.5},"sellPriceTable":{"minValue":100,"maxValue":4000,"growth":1},"levelUpPriceTable":{"minValue":50,"maxValue":2000,"growth":1},"rewardExpTable":{"minValue":7,"maxValue":4455,"growth":2.5},"evolvePrice":5000,"sortWeight":0},"type":"CharacterItem","maxStack":1,"useFixSellPrice":0,"fixSellPrice":0,"useFixLevelUpPrice":0,"fixLevelUpPrice":0,"useFixRewardExp":0,"fixRewardExp":0,"evolveInfo":{"requiredMaterials":[{"id":"RedMushroom","amount":1}],"evolveItem":"Thief 2"}},"Thief 2":{"id":"Thief 2","category":"","itemTier":{"id":"2-Blue","maxLevel":60,"expTable":{"minValue":10,"maxValue":11766,"growth":2.5},"sellPriceTable":{"minValue":100,"maxValue":6000,"growth":1},"levelUpPriceTable":{"minValue":50,"maxValue":3000,"growth":1},"rewardExpTable":{"minValue":7,"maxValue":8236,"growth":2.5},"evolvePrice":10000,"sortWeight":0},"type":"CharacterItem","maxStack":1,"useFixSellPrice":0,"fixSellPrice":0,"useFixLevelUpPrice":0,"fixLevelUpPrice":0,"useFixRewardExp":0,"fixRewardExp":0,"evolveInfo":{"requiredMaterials":[{"id":"RedMushroom","amount":1}],"evolveItem":"Thief 3"}},"Thief 3":{"id":"Thief 3","category":"","itemTier":{"id":"3-Purple","maxLevel":80,"expTable":{"minValue":10,"maxValue":18172,"growth":2.5},"sellPriceTable":{"minValue":100,"maxValue":8000,"growth":1},"levelUpPriceTable":{"minValue":50,"maxValue":4000,"growth":1},"rewardExpTable":{"minValue":7,"maxValue":12720,"growth":2.5},"evolvePrice":25000,"sortWeight":0},"type":"CharacterItem","maxStack":1,"useFixSellPrice":0,"fixSellPrice":0,"useFixLevelUpPrice":0,"fixLevelUpPrice":0,"useFixRewardExp":0,"fixRewardExp":0,"evolveInfo":{"requiredMaterials":[{"id":"RedMushroom","amount":1}],"evolveItem":""}},"ChestArmor":{"id":"ChestArmor","category":"","itemTier":{"id":"0-White","maxLevel":20,"expTable":{"minValue":10,"maxValue":2206,"growth":2.5},"sellPriceTable":{"minValue":100,"maxValue":2000,"growth":1},"levelUpPriceTable":{"minValue":50,"maxValue":1000,"growth":1},"rewardExpTable":{"minValue":7,"maxValue":1544,"growth":2.5},"evolvePrice":1000,"sortWeight":0},"type":"EquipmentItem","maxStack":1,"useFixSellPrice":0,"fixSellPrice":0,"useFixLevelUpPrice":0,"fixLevelUpPrice":0,"useFixRewardExp":0,"fixRewardExp":0,"evolveInfo":{"requiredMaterials":[],"evolveItem":""}},"NinjaArmor":{"id":"NinjaArmor","category":"","itemTier":{"id":"0-White","maxLevel":20,"expTable":{"minValue":10,"maxValue":2206,"growth":2.5},"sellPriceTable":{"minValue":100,"maxValue":2000,"growth":1},"levelUpPriceTable":{"minValue":50,"maxValue":1000,"growth":1},"rewardExpTable":{"minValue":7,"maxValue":1544,"growth":2.5},"evolvePrice":1000,"sortWeight":0},"type":"EquipmentItem","maxStack":1,"useFixSellPrice":0,"fixSellPrice":0,"useFixLevelUpPrice":0,"fixLevelUpPrice":0,"useFixRewardExp":0,"fixRewardExp":0,"evolveInfo":{"requiredMaterials":[],"evolveItem":""}},"Spear":{"id":"Spear","category":"","itemTier":{"id":"0-White","maxLevel":20,"expTable":{"minValue":10,"maxValue":2206,"growth":2.5},"sellPriceTable":{"minValue":100,"maxValue":2000,"growth":1},"levelUpPriceTable":{"minValue":50,"maxValue":1000,"growth":1},"rewardExpTable":{"minValue":7,"maxValue":1544,"growth":2.5},"evolvePrice":1000,"sortWeight":0},"type":"EquipmentItem","maxStack":1,"useFixSellPrice":0,"fixSellPrice":0,"useFixLevelUpPrice":0,"fixLevelUpPrice":0,"useFixRewardExp":0,"fixRewardExp":0,"evolveInfo":{"requiredMaterials":[],"evolveItem":""}},"Sword":{"id":"Sword","category":"","itemTier":{"id":"0-White","maxLevel":20,"expTable":{"minValue":10,"maxValue":2206,"growth":2.5},"sellPriceTable":{"minValue":100,"maxValue":2000,"growth":1},"levelUpPriceTable":{"minValue":50,"maxValue":1000,"growth":1},"rewardExpTable":{"minValue":7,"maxValue":1544,"growth":2.5},"evolvePrice":1000,"sortWeight":0},"type":"EquipmentItem","maxStack":1,"useFixSellPrice":0,"fixSellPrice":0,"useFixLevelUpPrice":0,"fixLevelUpPrice":0,"useFixRewardExp":0,"fixRewardExp":0,"evolveInfo":{"requiredMaterials":[],"evolveItem":""}}},"currencies":{"SOFT_CURRENCY":"GOLD", "HARD_CURRENCY":"GEM"},"staminas":{"STAGE":{"id":"STAGE_STAMINA","maxAmountTable":{"minValue":15,"maxValue":430,"growth":2.5},"recoverUnit":1,"recoverDuration":3}},"formations":["STAGE_FORMATION_A","STAGE_FORMATION_B","STAGE_FORMATION_C"],"stages":{"Stage001":{"id":"Stage001","requireStamina":2,"randomSoftCurrencyMinAmount":500,"randomSoftCurrencyMaxAmount":1000,"rewardPlayerExp":20,"rewardCharacterExp":100,"rewardItems":[{"id":"RedMushroom","amount":1,"randomRate":0.5}],"unlockStages":["Stage002"]},"Stage002":{"id":"Stage002","requireStamina":2,"randomSoftCurrencyMinAmount":500,"randomSoftCurrencyMaxAmount":1000,"rewardPlayerExp":20,"rewardCharacterExp":100,"rewardItems":[{"id":"RedMushroom","amount":1,"randomRate":0.5}],"unlockStages":["Stage003"]},"Stage003":{"id":"Stage003","requireStamina":2,"randomSoftCurrencyMinAmount":500,"randomSoftCurrencyMaxAmount":1000,"rewardPlayerExp":20,"rewardCharacterExp":100,"rewardItems":[{"id":"RedMushroom","amount":1,"randomRate":0.5}],"unlockStages":["Stage004"]},"Stage004":{"id":"Stage004","requireStamina":2,"randomSoftCurrencyMinAmount":500,"randomSoftCurrencyMaxAmount":1000,"rewardPlayerExp":20,"rewardCharacterExp":100,"rewardItems":[{"id":"RedMushroom","amount":1,"randomRate":0.5}],"unlockStages":["Stage005"]},"Stage005":{"id":"Stage005","requireStamina":2,"randomSoftCurrencyMinAmount":500,"randomSoftCurrencyMaxAmount":1000,"rewardPlayerExp":20,"rewardCharacterExp":100,"rewardItems":[{"id":"RedMushroom","amount":1,"randomRate":0.5}],"unlockStages":["Stage006"]},"Stage006":{"id":"Stage006","requireStamina":3,"randomSoftCurrencyMinAmount":500,"randomSoftCurrencyMaxAmount":1000,"rewardPlayerExp":30,"rewardCharacterExp":150,"rewardItems":[{"id":"RedMushroom","amount":1,"randomRate":0.5}],"unlockStages":["Stage007"]},"Stage007":{"id":"Stage007","requireStamina":3,"randomSoftCurrencyMinAmount":500,"randomSoftCurrencyMaxAmount":1000,"rewardPlayerExp":30,"rewardCharacterExp":150,"rewardItems":[{"id":"RedMushroom","amount":1,"randomRate":0.5}],"unlockStages":["Stage008"]},"Stage008":{"id":"Stage008","requireStamina":3,"randomSoftCurrencyMinAmount":500,"randomSoftCurrencyMaxAmount":1000,"rewardPlayerExp":30,"rewardCharacterExp":150,"rewardItems":[{"id":"RedMushroom","amount":1,"randomRate":0.5}],"unlockStages":["Stage009"]},"Stage009":{"id":"Stage009","requireStamina":3,"randomSoftCurrencyMinAmount":500,"randomSoftCurrencyMaxAmount":1000,"rewardPlayerExp":30,"rewardCharacterExp":150,"rewardItems":[{"id":"RedMushroom","amount":1,"randomRate":0.5}],"unlockStages":["Stage010"]},"Stage010":{"id":"Stage010","requireStamina":4,"randomSoftCurrencyMinAmount":500,"randomSoftCurrencyMaxAmount":1000,"rewardPlayerExp":40,"rewardCharacterExp":200,"rewardItems":[{"id":"RedMushroom","amount":1,"randomRate":0.5}],"unlockStages":[]}},"lootBoxes":{"SoftCurrency":{"id":"SoftCurrency","requirementType":0,"lootboxPacks":[{"openAmount":1,"price":1000},{"openAmount":10,"price":10000}],"lootboxRewards":[{"id":"ChestArmor","amount":1,"randomWeight":25},{"id":"NinjaArmor","amount":1,"randomWeight":25},{"id":"Spear","amount":1,"randomWeight":25},{"id":"Sword","amount":1,"randomWeight":25}]},"HardCurrency":{"id":"HardCurrency","requirementType":1,"lootboxPacks":[{"openAmount":1,"price":5},{"openAmount":10,"price":50}],"lootboxRewards":[{"id":"BlackKnight 2","amount":1,"randomWeight":10},{"id":"Shaman 2","amount":1,"randomWeight":10},{"id":"Thief 2","amount":1,"randomWeight":10},{"id":"BlackKnight 1","amount":1,"randomWeight":20},{"id":"Shaman 1","amount":1,"randomWeight":20},{"id":"Thief 1","amount":1,"randomWeight":20}]}},"startItems":[{"id":"BlackKnight","amount":5},{"id":"Shaman","amount":5},{"id":"Thief","amount":5},{"id":"ChestArmor","amount":5},{"id":"NinjaArmor","amount":5},{"id":"Spear","amount":5},{"id":"Sword","amount":5}],"startCharacters":["Thief","BlackKnight","Shaman"],"unlockStages":["Stage001"],"playerMaxLevel":1000,"playerExpTable":{"minValue":20,"maxValue":2000000,"growth":2},"revivePrice":5,"resetItemLevelAfterEvolve":1};