<script setup lang="ts">
import CreateRoomStory from '@/application/chat/room/CreateRoomStory';
import RoomCreatedEvent from '@/domain/chat/room/RoomCreatedEvent';
import { eventDispatcher } from '@/infra/dispachers/EventEmitterDispacher';

eventDispatcher.subscribe(RoomCreatedEvent, (e) => console.log('handler' + e.payload().name));

eventDispatcher.subscribe(RoomCreatedEvent, (e) => console.log('handler2' + e.payload().name));

const story = new CreateRoomStory(eventDispatcher);

story.execute({
  name: "IFCE",
  description: "grupo de estudantes do IFCE"
}).then(() => {
  console.log("done");
})



</script>

<template>
  <div class="ev-road-map">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
    praesentium autem consequatur iste itaque harum repellendus eius incidunt
    sunt quae quas voluptates, deleniti velit, voluptate animi explicabo.
    Perspiciatis sed tenetur quidem ea rerum consequuntur eaque sit vero. Omnis,
    quia dolore iste dolorem quisquam temporibus. Itaque velit nam laudantium
    quo nobis explicabo magni repellendus dolorem impedit iure nihil, at
    excepturi placeat neque, rerum atque libero? Quam consequatur mollitia
    fugit, rem alias harum officiis! Repellendus reprehenderit iusto odit
    ratione asperiores tenetur adipisci aliquam architecto odio quis quod est
    recusandae, harum corrupti distinctio nesciunt velit nemo quae. Repellendus
    omnis iste veniam, quia qui eos praesentium dolor nemo? Nulla iusto optio
    omnis incidunt hic minus aliquid est placeat quidem porro magnam totam
    voluptatum, cum libero vel tenetur. Aspernatur reprehenderit, iste inventore
    corrupti laboriosam nostrum sed? Dignissimos eaque a optio, culpa veritatis
    mollitia natus, facere dolorum illo earum blanditiis? Dolor commodi
    exercitationem incidunt sit vel odio nulla fuga, non tenetur quis enim
    labore eligendi illum harum architecto omnis. Aperiam quos qui minima
    ratione tempore enim repellat maxime, inventore ipsam laboriosam.
    Asperiores, atque. Laboriosam obcaecati repellendus sunt quia corrupti ullam
    pariatur magni ipsum, et, deleniti, sequi harum perspiciatis voluptas fuga
    magnam nesciunt. Qui illo perspiciatis aperiam minima sapiente adipisci
    sequi excepturi quasi, voluptatibus libero esse totam nulla cupiditate,
    aspernatur asperiores corporis aliquam. Iure iusto eligendi totam, nemo
    dignissimos nihil consequatur aut quia laboriosam architecto itaque amet
    voluptatibus, illo qui sunt ea. Molestiae cum rem repellendus, earum dolorum
    rerum, nesciunt eos aperiam necessitatibus iste error praesentium, aliquam
    doloribus autem dicta ex vel sequi quae soluta sit alias dolor! Tenetur,
    quisquam fuga? Neque dolor blanditiis aliquid fuga fugiat recusandae autem
    omnis debitis consequatur harum. Iure rem architecto repellat, ab corporis
    delectus animi excepturi asperiores ullam quaerat totam, suscipit sapiente,
    pariatur deserunt. Esse veniam aliquid illo, autem cumque doloribus
    veritatis assumenda ipsa blanditiis quia dolor cupiditate. Voluptates
    soluta, ipsa dicta aliquam consequatur voluptas aliquid iure, sint provident
    officiis itaque quasi obcaecati praesentium nulla. Cupiditate reprehenderit
    iure labore doloremque. Dicta numquam sit quibusdam! Perspiciatis laboriosam
    error nesciunt expedita perferendis minima ducimus adipisci quis aut officia
    hic, eveniet ipsa, veniam quibusdam nam mollitia dicta alias illum at
    repellendus saepe praesentium! Cumque doloribus nesciunt cupiditate
    blanditiis ducimus? Ipsum nostrum ducimus deserunt hic unde explicabo.
    Fugit, quae? Harum inventore itaque eum ullam numquam, iste expedita
    molestiae accusantium cupiditate deserunt eaque sapiente explicabo
    voluptates tenetur, adipisci odit. Cum aliquid accusantium officia expedita
    dolores, nemo dolor asperiores, in labore exercitationem totam? Soluta
    perferendis non suscipit aut aliquid, harum illum. Nemo similique adipisci
    harum nihil rerum ut alias aperiam cum, sequi debitis atque molestias
    tempora eligendi ipsum corporis aspernatur totam nam, quae voluptatibus
    exercitationem hic reprehenderit aliquid ab? A est deserunt sint saepe eius
    modi corporis, recusandae culpa consequatur. Assumenda voluptas cumque sed
    enim aliquam tempore, ducimus quae deserunt tenetur voluptate voluptatibus
    maxime quos vel dolores, odit unde? Recusandae dolorem vero in quia nesciunt
    deleniti maiores. Perferendis libero possimus necessitatibus ut eius, quas,
    cum dolorem sint dolor provident voluptatem quia est placeat cumque dolores
    quisquam obcaecati ducimus officia qui! Perferendis maiores atque deserunt
    eaque iste voluptate repudiandae omnis nemo tempora esse ducimus non rem
    dolorem est, ipsam inventore laudantium voluptatum aspernatur, cupiditate
    repellat ipsum dolor assumenda asperiores debitis. Magnam dicta consectetur,
    commodi ipsum minima esse fuga aspernatur ea voluptatem dignissimos
    praesentium, asperiores quisquam deleniti corrupti quam id, laudantium sint
    enim. Perspiciatis error dignissimos, cumque aliquid sint explicabo deserunt
    distinctio id dolor atque commodi a facere assumenda alias, sapiente
    voluptas maxime consequuntur officia quis necessitatibus minus non. Saepe
    obcaecati error minus delectus illo. Ea suscipit consequatur sint tempore
    natus tempora aperiam quos voluptas. Eveniet, dignissimos perferendis.
    Deserunt iusto libero quibusdam, nisi harum illum fugiat possimus ratione
    laboriosam sunt mollitia, amet nam, iure et placeat optio. Perferendis esse
    deserunt laborum sed dolor! Cum asperiores odit error unde, nemo tempore
    nostrum minus laudantium veniam incidunt molestias tenetur enim cumque iste
    voluptatem consequatur aliquid? Fugiat minus autem cumque cupiditate quos!
    Fugiat repellendus, quisquam ipsum praesentium magni harum voluptates
    expedita. Nam necessitatibus et iste eos unde magni, quo rem nemo
    praesentium nihil delectus minus quidem vero aspernatur at consectetur
    distinctio dolorum optio rerum ipsa ipsum, accusamus ab? Quaerat perferendis
    quas, modi magnam doloremque aliquam qui natus aliquid tempora eaque officia
    blanditiis corporis facere beatae eligendi voluptatum non inventore omnis
    nisi minima maxime, animi quisquam voluptatem. Explicabo sit saepe
    reiciendis, harum quasi eius voluptate similique, numquam assumenda autem
    reprehenderit molestias incidunt dolorem ex. Amet reiciendis, dolores
    eveniet exercitationem deserunt fuga illum veniam quia animi tempore
    similique nulla quam unde quas maiores vitae asperiores praesentium ducimus
    delectus autem? Asperiores consectetur sit ab nam id nihil at accusamus
    officia dolor excepturi cum accusantium itaque quod suscipit ratione
    doloribus similique dicta, in atque magni, perspiciatis quaerat illo! Velit
    cumque illum voluptate odit, soluta voluptas ut laborum molestias inventore,
    doloribus nemo aut iusto numquam explicabo veritatis.
  </div>
</template>

<style>
</style>
