观察这段 xml：

```xml
<ThingDef Name="BaseMakeableGun" ParentName="BaseGunWithQuality" Abstract="True">
  <recipeMaker>
    <workSpeedStat>GeneralLaborSpeed</workSpeedStat>
    <!-- ... -->
  </recipeMaker>
</ThingDef>
```

为什么 `<ThingDef>` 中可以使用 `<recipeMaker>` 呢？因为在 `ThingDef` 中声明了 workSpeedStat 属性。

```C#
public class ThingDef : BuildableDef
{
  // ...
  public RecipeMakerProperties recipeMaker;
  // ...
}
```

同样的道理，`<recipeMaker>` 的类型 `RecipeMakerProperties` 申明着 `workSpeedStat` 属性，因此可用 `<workSpeedStat>` 标签。

问题在于，`<workSpeedStat>` 可以填什么值呢？

```c#
public StatDef workSpeedStat;
public StatDef efficiencyStat;
// ...
```

尽管它的值看上去像个字符串，但 `workSpeedStat` 的声明表示它是 `StatDef` 类型。并且，有相当多属性的类型为它，且语境各不相同。尝试搜索其值 `GeneralLaborSpeed`，能看到：

```xml
<StatDef>
  <defName>GeneralLaborSpeed</defName>
  <!-- ... -->
</StatDef>
```

在 xml 中声明 `<StatDef>`，它们在初始化时构建为 `StatDef` 的子类，它相当于成了 `GeneralLaborSpeed` 类。

关键在于：workSpeedStat 需要 `StatDef` 类型的值，`GeneralLaborSpeed` 是 `StatDef` 的子类，满足要求。

> 这符合里氏替换原则。

回到最初的问题，`<workSpeedStat>` 可以填什么值呢？

回答是，理论上任何 `<StatDef>` 声明的都可以，填其 `<defName>` 的值即可。